import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$shardMode",
    version: "2.1.0",
    aliases: [
        "$botShardMode",
        "$clientShardMode"
    ],
    description: "Returns the shard mode of the client",
    unwrap: false,
    output: ArgType.String,
    execute(ctx) {
        return this.success(ctx.client.shard?.mode)
    },
})