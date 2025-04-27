import { ContainerBuilder } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$addSpoiler",
    version: "2.3.0",
    description: "Adds a spoiler to the current container",
    unwrap: false,
    execute(ctx) {
        const comp = ctx.container.components.at(-1)
        if (comp instanceof ContainerBuilder) comp.setSpoiler(true)
        return this.success()
    },
})