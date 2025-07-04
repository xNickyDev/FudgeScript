import { ActionRowBuilder, ButtonBuilder, ButtonStyle, ContainerBuilder, SectionBuilder } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"
import { buildActionRow, buildComponent } from "../../functions/components"

export default new NativeFunction({
    name: "$editButton",
    version: "1.0.7",
    description: "Edits a button component",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "custom ID",
            description: "The custom id to find the component",
            rest: false,
            type: ArgType.String,
            required: true,
        },
        {
            name: "new custom ID",
            description: "The new custom id for this component",
            rest: false,
            type: ArgType.String,
            required: true,
        },
        {
            name: "label",
            description: "The button label",
            rest: false,
            type: ArgType.String,
            required: true,
        },
        {
            name: "style",
            description: "The style for this button",
            enum: ButtonStyle,
            type: ArgType.Enum,
            required: true,
            rest: false,
        },
        {
            name: "emoji",
            rest: false,
            type: ArgType.String,
            description: "The emoji for this button",
        },
        {
            name: "disabled",
            rest: false,
            type: ArgType.Boolean,
            description: "Whether to disable the button",
        },
    ],
    execute(ctx, [oldId, id, label, style, emoji, disabled]) {
       for (let i = 0, len = ctx.container.components.length;i < len;i++) {
            const comp = ctx.container.components[i]
            const comps = "components" in comp
                ? comp instanceof ContainerBuilder
                    ? comp.components.map((x) => buildComponent(x.toJSON()))
                    : comp instanceof SectionBuilder
                        ? new Array(buildActionRow(comp.accessory))
                        : comp.components
                : undefined
            if (!comps) continue

            for (let n = 0, len = comps.length;n < len;n++) {
                const row = comps[n]
                const btn = row instanceof ActionRowBuilder
                    ? row.components.find((x) => "custom_id" in x.data && x.data.custom_id === oldId)
                    : row instanceof SectionBuilder
                        ? buildActionRow(row.accessory)
                        : row

                if (btn instanceof ButtonBuilder) {
                    btn.setLabel(label)
                        .setStyle(style)

                    if (emoji) btn.setEmoji(emoji)
                    if (typeof disabled === "boolean") btn.setDisabled(disabled)

                    if (style === ButtonStyle.Link) btn.setURL(id)
                    else if (style === ButtonStyle.Premium) btn.setSKUId(id)
                    else btn.setCustomId(id)

                    if (comp instanceof ContainerBuilder) {
                        const insert = row instanceof ActionRowBuilder
                            ? row.setComponents(row.components.splice(row.components.findIndex((x) => "custom_id" in x.data && x.data.custom_id === oldId), 1, btn))
                            : row instanceof SectionBuilder
                                ? row.setButtonAccessory(btn)
                                : undefined

                        if (insert) comp.spliceComponents(n, 1, insert)
                    } else if (comp instanceof SectionBuilder) comp.setButtonAccessory(btn)

                    return this.success()
                }
            }
        }

        return this.success()
    },
})
