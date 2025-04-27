import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$addSpoiler",
    version: "2.3.0",
    description: "Adds a spoiler to the current container",
    unwrap: false,
    execute(ctx) {
        ctx.container.containers.at(-1)?.setSpoiler(true)
        return this.success()
    },
})