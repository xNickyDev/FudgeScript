"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
function parseDefaultReactionEmoji(ctx, emoji) {
    if (!emoji)
        return null;
    const fromUrl = structures_1.CompiledFunction.CDNIdRegex.exec(emoji);
    if (fromUrl !== null)
        return ctx.guild?.emojis.cache.get(fromUrl[2]);
    const parsed = (0, discord_js_1.parseEmoji)(emoji);
    if (parsed?.id)
        return ctx.guild?.emojis.cache.get(parsed.id);
    return parsed?.name ? { id: null, name: parsed.name } : null;
}
exports.default = new structures_1.NativeFunction({
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
            type: structures_1.ArgType.Channel,
            check: (i) => i.isThreadOnly()
        },
        {
            name: "emoji",
            description: "The new default recation emoji",
            rest: false,
            type: structures_1.ArgType.String,
        },
        {
            name: "reason",
            description: "Reason for modifying default emoji",
            rest: false,
            type: structures_1.ArgType.String
        }
    ],
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [channel, emoji, reason]) {
        const chan = channel;
        if (emoji)
            chan.setDefaultReactionEmoji(null);
        return this.success(!!(chan.setDefaultReactionEmoji(parseDefaultReactionEmoji(ctx, emoji) || null, reason || undefined)));
    },
});
//# sourceMappingURL=setDefaultReactionEmoji.js.map