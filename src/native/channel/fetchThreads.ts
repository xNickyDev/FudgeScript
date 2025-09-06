import { BaseChannel, ThreadManager } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export enum ThreadType {
    Public = "public",
    Private = "private"
}

export default new NativeFunction({
    name: "$fetchThreads",
    version: "2.5.0",
    description: "Caches all threads of a channel",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to cache its threads",
            rest: false,
            type: ArgType.Channel,
            required: true,
            check: (i: BaseChannel) => "threads" in i
        },
        {
            name: "archived",
            description: "Whether to cache archived threads, otherwise active",
            rest: false,
            type: ArgType.Boolean,
        },
        {
            name: "type",
            description: "The type of archived threads to cache, defaults to public",
            rest: false,
            type: ArgType.Enum,
            enum: ThreadType
        },
    ],
    async execute(ctx, [channel, archived, type]) {
        const chan = channel ?? ctx.channel

        if ("threads" in chan) {
            const threads = chan.threads as ThreadManager
            
            if (archived) await threads.fetchArchived({ type: type || undefined, fetchAll: true }).catch(ctx.noop)
            else await threads.fetchActive().catch(ctx.noop)
        }

        return this.success()
    },
})