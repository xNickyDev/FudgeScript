import { BaseChannel, FetchThreadsOptions, ThreadManager } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"
import array from "../../functions/array"

export enum ThreadType {
    Public = "public",
    Private = "private"
}

export default new NativeFunction({
    name: "$channelThreadIDs",
    version: "2.5.0",
    description: "Returns the thread ids of a channel",
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
            name: "archived",
            description: "Whether to return archived threads, otherwise active",
            rest: false,
            type: ArgType.Boolean,
        },
        {
            name: "type",
            description: "The type of archived threads to return, defaults to public",
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
    async execute(ctx, [channel, archived, type, sep]) {
        const chan = channel ?? ctx.channel

        const options = {
            archived: {
                type: type || undefined,
                fetchAll: true
            }
        } as FetchThreadsOptions

        return this.success(
            "threads" in chan
                ? (await (chan.threads as ThreadManager).fetch(archived ? options : undefined).catch(ctx.noop))?.threads.map((x) => x.id).join(sep ?? ", ")
                : null
        )
    },
})