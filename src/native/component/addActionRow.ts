import { ActionRowBuilder } from "discord.js"
import { NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$addActionRow",
    version: "1.0.0",
    description: "Adds an action row",
    unwrap: true,
    execute(ctx) {
        const { actionRow, components } = ctx.container
        if (actionRow) components.push(actionRow)
        ctx.container.actionRow = new ActionRowBuilder()
        return this.success()
    },
})