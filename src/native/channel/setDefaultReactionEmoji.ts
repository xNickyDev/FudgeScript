import { BaseChannel, DefaultReactionEmoji, parseEmoji, ThreadOnlyChannel } from "discord.js"
import { ArgType, CompiledFunction, Context, NativeFunction } from "../../structures"

function parseDefaultReactionEmoji(ctx: Context, str: string | null) {
    if (!str) return null

    const parsed = parseEmoji(str)
    const id = parsed?.id ?? CompiledFunction.CDNIdRegex.exec(str)?.[2]

    const emoji = id ? ctx.guild?.emojis.cache.get(id) : parsed
    return emoji ? { id: emoji.id ?? null, name: emoji.name } : null
}

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
        const parsed = parseDefaultReactionEmoji(ctx, emoji)
        return this.success(!!((chan as ThreadOnlyChannel).setDefaultReactionEmoji(parsed as DefaultReactionEmoji, reason || undefined)))
    },
})