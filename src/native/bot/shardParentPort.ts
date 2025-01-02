import { ArgType, NativeFunction, Return } from "../../structures"
import argCount from "../string/argCount"

export default new NativeFunction({
    name: "$shardParentPort",
    version: "2.1.0",
    aliases: [
        "$botShardParentPort",
        "$clientShardParentPort"
    ],
    description: "Returns the shard parent port of the client",
    unwrap: false,
    output: ArgType.String,
    execute(ctx) {
        return this.success(ctx.client.shard?.parentPort)
    },
})