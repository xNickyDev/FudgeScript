"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setDefaultReactionEmoji",
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
    async execute(ctx, [chan, emoji, reason]) {
        const parsed = emoji ? (0, discord_js_1.parseEmoji)(emoji) : null;
        return this.success(!!(chan.setDefaultReactionEmoji(parsed ? { id: `${parsed.id}`, name: parsed.name } : null, reason || undefined)));
    },
});
//# sourceMappingURL=setDefaultReactionEmoji.js.map