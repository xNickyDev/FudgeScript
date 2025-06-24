import { ButtonBuilder, ButtonStyle } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"
import { buildComponent, findButton } from "../../functions/components"

export default new NativeFunction({
    name: "$editButtonOf",
    version: "1.5.0",
    description: "Edits a button component of a message",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel id to pull message from",
            rest: false,
            required: true,
            type: ArgType.TextChannel
        },
        {
            name: "message ID",
            description: "The message to edit button for",
            rest: false,
            required: true,
            type: ArgType.Message,
            pointer: 0
        },
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
    output: ArgType.Boolean,
    async execute(ctx, [, m, oldId, id, label, style, emoji, disabled]) {
        const components = m.components.map(x => buildComponent(x))
        console.log("Builders", components)
        const btn = findButton(components, oldId)
        console.log("Component", btn)

        if (!(btn instanceof ButtonBuilder)) return this.success()

        btn.setDisabled(disabled || btn.data.disabled!)
            .setStyle(style || btn.data.style!)
            // @ts-ignore
            .setLabel(label || btn.data.label || "")

        // @ts-ignore
        if (style === ButtonStyle.Link) btn.setURL(id || btn.data.custom_id)
        else if (style === ButtonStyle.Premium) btn.setSKUId(id)
        // @ts-ignore
        else btn.setCustomId(id || btn.data.custom_id)

        if (emoji) btn.setEmoji(emoji)

        return this.success(
            !!(await m.edit({ components: components.map((x) => x.toJSON()) }).catch(ctx.noop))
        )
    },
})
