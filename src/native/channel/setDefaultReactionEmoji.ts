import { BaseChannel, parseEmoji, ThreadOnlyChannel } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$setDefaultReactionEmoji",
    version: "2.2.0",
    description: "Sets a forum's default recation emoji for posts",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The forum to modify",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isThreadOnly()
        },
        {
            name: "emoji",
            description: "The new default recation emoji",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "reason",
            description: "Reason for modifying default emoji",
            rest: false,
            type: ArgType.String
        }
    ],
    output: ArgType.Boolean,
    async execute(ctx, [ chan, emoji, reason ]) {
        const parsed = emoji ? parseEmoji(emoji) : null
        return this.success(!!((chan as ThreadOnlyChannel).setDefaultReactionEmoji(parsed ? { id: `${parsed.id}`, name: parsed.name } : null, reason || undefined)))
    },
})