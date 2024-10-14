import { BaseChannel, ThreadOnlyChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$forumDefaultReactionEmoji",
    version: "1.5.0",
    description: "Returns the default recation emoji of a forum",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to get default recation emoji of",
            rest: false,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isThreadOnly(),
            required: true
        },
    ],
    output: ArgType.DefaultReactionEmoji,
    execute(ctx, [chan]) {
        return this.success((chan as ThreadOnlyChannel)?.defaultReactionEmoji)
    },
})