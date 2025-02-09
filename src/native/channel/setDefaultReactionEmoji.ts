import { BaseChannel, parseEmoji, ThreadOnlyChannel } from "discord.js"
import { ArgType, CompiledFunction, Context, NativeFunction } from "../../structures"

function parseDefaultReactionEmoji(ctx: Context, emoji: string | null) {
    if (!emoji) return null

    const fromUrl = CompiledFunction.CDNIdRegex.exec(emoji)
    if (fromUrl !== null) return ctx.guild?.emojis.cache.get(fromUrl[2])
    
    const parsed = parseEmoji(emoji)
    if (parsed?.id) return ctx.guild?.emojis.cache.get(parsed.id)
    
    return { id: "", name: parsed?.name ? parsed.name : "" }
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
        return this.success(!!((chan as ThreadOnlyChannel).setDefaultReactionEmoji(parseDefaultReactionEmoji(ctx, emoji) || null, reason || undefined)))
    },
})