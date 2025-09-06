import { BaseChannel, ThreadManager } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"
import array from "../../functions/array"
import { ThreadType } from "./channelThreadIDs"

export default new NativeFunction({
    name: "$channelArchivedThreadIDs",
    version: "2.5.0",
    description: "Returns the archived thread ids of a channel",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to get its threads",
            rest: false,
            type: ArgType.Channel,
            required: true,
            check: (i: BaseChannel) => "threads" in i
        },
        {
            name: "type",
            description: "The type of threads to return, defaults to public",
            rest: false,
            type: ArgType.Enum,
            enum: ThreadType
        },
        {
            name: "separator",
            description: "The separator to use for every thread",
            rest: false,
            type: ArgType.String,
        },
    ],
    output: array<ArgType.Channel>(),
    async execute(ctx, [channel, type, sep]) {
        const chan = channel ?? ctx.channel
        return this.success(
            "threads" in chan
                ? (await (chan.threads as ThreadManager).fetchArchived({ type: type || undefined }).catch(ctx.noop))?.threads.map((x) => x.id).join(sep ?? ", ")
                : null
        )
    },
})