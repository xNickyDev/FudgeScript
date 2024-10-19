import { ButtonBuilder, ActionRowBuilder } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$disableAllButtonsOf",
    version: "1.5.0",
    description: "Disables all buttons of a message, returns bool",
    unwrap: true,
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
            description: "The message to disable buttons on",
            rest: false,
            required: true,
            type: ArgType.Message,
            pointer: 0
        },
        {
            name: "index",
            description: "The index of the row to disable",
            rest: false,
            type: ArgType.Number,
        },
    ],
    brackets: true,
    output: ArgType.Boolean,
    async execute(ctx, [, msg, index]) {
        const components = msg.components.map(x => ActionRowBuilder.from(x))
        
        if (index) {
            const row = components[index]
            const actionRow = new ActionRowBuilder()
            row.components.forEach(component => {
                if (component instanceof ButtonBuilder) {
                    actionRow.addComponents(component.setDisabled(true))
                } else {
                    actionRow.addComponents(component)
                }
            })
            components.splice(index, 1, row)
        } else {
            components.map(row => {
                const actionRow = new ActionRowBuilder()
                row.components.forEach(component => {
                    if (component instanceof ButtonBuilder) {
                        actionRow.addComponents(component.setDisabled(true))
                    } else {
                        actionRow.addComponents(component)
                    }
                })
                return actionRow
            })
        }

        return this.success(!!(await msg.edit({ components: components as ActionRowBuilder<ButtonBuilder>[] }).catch(ctx.noop)))
    },
})