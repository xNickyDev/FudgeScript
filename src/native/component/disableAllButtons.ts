import { ButtonBuilder, ActionRowBuilder } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$disableAllButtons",
    version: "1.5.0",
    description: "Disables all buttons on the current message",
    unwrap: true,
    args: [
        {
            name: "index",
            description: "The index of the row to disable",
            rest: false,
            required: true,
            type: ArgType.Number,
        },
    ],
    brackets: false,
    async execute(ctx, [index]) {
        const data = ctx.container.components
        const components = index ? [data[index]] : data

        components.map(row => {
            const actionRow = new ActionRowBuilder()
            row.components.forEach(component => {
                if (component instanceof ButtonBuilder) {
                    const disabledButton = component.setDisabled(true)
                    actionRow.addComponents(disabledButton)
                } else {
                    actionRow.addComponents(component)
                }
            })
            return actionRow
        })

        return this.success()
    },
})