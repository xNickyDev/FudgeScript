import { ActionRowBuilder, ContainerBuilder } from "discord.js"
import { NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$addActionRow",
    version: "1.0.0",
    description: "Adds an action row",
    unwrap: true,
    execute(ctx) {
        const comp = ctx.container.components.at(-1)
        if (comp instanceof ContainerBuilder) comp.addActionRowComponents(row => row)
        else ctx.container.components.push(new ActionRowBuilder())
        return this.success()
    },
})