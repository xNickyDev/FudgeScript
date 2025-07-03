import { ActionRowBuilder, ContainerBuilder, UserSelectMenuBuilder } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"
import { buildComponent } from "../../functions/components"

export default new NativeFunction({
    name: "$editUserSelectMenuOf",
    version: "2.2.0",
    description: "Edits a user select menu of a message, returns bool",
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
            description: "The message to edit select menu for",
            rest: false,
            required: true,
            type: ArgType.Message,
            pointer: 0
        },
        {
            name: "old custom ID",
            description: "The custom id of the menu to edit",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "new custom ID",
            description: "The new custom id to use for this menu",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "placeholder",
            description: "The placeholder to use for the menu",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "disabled",
            description: "Whether to keep this menu disabled",
            type: ArgType.Boolean,
            rest: false,
        },
        {
            name: "min values",
            description: "The min values to choose for the menu",
            rest: false,
            type: ArgType.Number,
        },
        {
            name: "max values",
            description: "The max values to choose for the menu",
            rest: false,
            type: ArgType.Number,
        },
        {
            name: "default users",
            rest: true,
            type: ArgType.String,
            description: "The default selected users of the menu"
        }
    ],
    output: ArgType.Boolean,
    async execute(ctx, [, m, old, id, placeholder, disabled, min, max, users]) {
        const components = m.components.map((x) => buildComponent(x))

        outer:
        for (let i = 0, len = components.length;i < len;i++) {
            const comp = components[i]
            const comps = "components" in comp ? comp.components : undefined
            if (!comps) continue

            for (let n = 0, len = comps.length;n < len;n++) {
                const row = comps[n]
                const menu = row instanceof ActionRowBuilder ? row.components[0] : row
                console.log("Row", row)
                console.log("Menu", menu)

                if (menu instanceof UserSelectMenuBuilder && menu.data.custom_id === old) {
                    console.log(menu)
                    menu.setCustomId(id)
                    
                    if (placeholder) menu.setPlaceholder(placeholder)
                    if (typeof disabled === "boolean") menu.setDisabled(disabled)
                    if (typeof min === "number") menu.setMinValues(min)
                    if (typeof max === "number") menu.setMaxValues(max)
                    if (users.length) menu.setDefaultUsers(users.filter(Boolean))
                    
                    break outer
                }
            }
        }

        return this.success(
            !!(await m.edit({ components: components.map((x) => x.toJSON()) }).catch(ctx.noop))
        )
    },
})