"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionType = void 0;
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
var ReactionType;
(function (ReactionType) {
    ReactionType["Normal"] = "normal";
    ReactionType["Super"] = "burst";
})(ReactionType || (exports.ReactionType = ReactionType = {}));
exports.default = new structures_1.NativeFunction({
    name: "$getMessageReactionCount",
    version: "1.0.0",
    description: "Gets the amount of users that have reacted to a specific emoji",
    unwrap: true,
    output: structures_1.ArgType.Number,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel the message is located",
            rest: false,
            required: true,
            type: structures_1.ArgType.Channel,
            check: (i) => i.isTextBased(),
        },
        {
            name: "message ID",
            description: "The message to get emoji count from",
            rest: false,
            type: structures_1.ArgType.Message,
            pointer: 0,
            required: true,
        },
        {
            name: "emoji",
            description: "The emoji to get its user count",
            required: true,
            rest: false,
            type: structures_1.ArgType.String,
        },
        {
            name: "type",
            description: "The type of the reaction to count users for",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: ReactionType
        },
    ],
    execute(ctx, [, message, emote, type]) {
        const emoji = (0, discord_js_1.parseEmoji)(emote);
        const reaction = message.reactions.cache.find(r => r.emoji.toString() === emoji?.toString() || r.emoji.id === emoji?.id || r.emoji.name === emoji?.name);
        return this.success(type ? reaction?.countDetails?.[type] : reaction?.count);
    },
});
//# sourceMappingURL=getMessageReactionCount.js.map