import { ActionRowBuilder, ButtonBuilder, StringSelectMenuBuilder } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$editStringSelectMenuOf",
    version: "1.5.0",
    description: "Edits a string select menu of a message",
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
    ],
    output: ArgType.Boolean,
    async execute(ctx, [, m, old, id, placeholder, disabled, min, max]) {
        const components = m.components.map(x => ActionRowBuilder.from(x))

        for (let i = 0, len = components.length;i < len;i++) {
            const comp = components[i]
            const menu = comp.components[0]
            if (menu instanceof StringSelectMenuBuilder && menu.data.custom_id === old) {
                menu.setCustomId(id)
                
                if (disabled !== null) menu.setDisabled(disabled)
                if (placeholder) menu.setPlaceholder(placeholder)
                if (min !== null) menu.setMinValues(min)
                if (max !== null) menu.setMaxValues(max)

                break
            }
        }

        return this.success(
            !!(await m.edit({ components: components as ActionRowBuilder<ButtonBuilder>[] }).catch(ctx.noop))
        )
    },
})
