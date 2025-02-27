import { ButtonBuilder, ActionRowBuilder } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$enableButtons",
    version: "2.2.0",
    description: "Enables all buttons on the current message",
    aliases: ["$enableAllButtons"],
    unwrap: true,
    args: [
        {
            name: "index",
            description: "The index of the row to enable",
            rest: false,
            required: true,
            type: ArgType.Number,
        },
    ],
    brackets: false,
    execute(ctx, [index]) {
        const data = ctx.container.components
        const components = Number.isFinite(index) ? [data[index]] : data

        components.forEach(row => {
            const actionRow = new ActionRowBuilder()
            row?.components.forEach(component => {
                if (component instanceof ButtonBuilder) {
                    actionRow.addComponents(component.setDisabled(false))
                } else {
                    actionRow.addComponents(component)
                }
            })
        })

        return this.success()
    },
})