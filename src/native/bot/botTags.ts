import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$botTags",
    version: "1.5.0",
    description: "Returns the client tags",
    unwrap: false,
    aliases: [
        "$clientTags"
    ],
    output: ArgType.String,
    execute(ctx) {
        return this.success(ctx.client.tags)
    },
})
