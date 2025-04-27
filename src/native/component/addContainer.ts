import { ContainerBuilder } from "discord.js"
import { NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$addContainer",
    version: "2.3.0",
    description: "Adds a new component container",
    unwrap: false,
    experimental: true,
    execute(ctx) {
        ctx.container.isComponentsV2 = true
        ctx.container.containers.push(new ContainerBuilder())
        return this.success()
    },
})