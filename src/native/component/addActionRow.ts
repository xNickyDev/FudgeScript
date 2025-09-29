import { ActionRowBuilder } from "discord.js"
import { NativeFunction, Return } from "../../structures"
import { addActionRow } from "../../functions/components"

export default new NativeFunction({
    name: "$addActionRow",
    version: "1.0.0",
    description: "Adds an action row",
    unwrap: true,
    execute(ctx) {
        addActionRow(ctx, false)
        ctx.container.actionRow = new ActionRowBuilder()
        return this.success()
    },
})