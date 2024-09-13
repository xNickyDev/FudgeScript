"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$deleteUserMessageReaction",
    version: "1.0.6",
    description: "Deletes user emoji reaction from a message, returns bool",
    unwrap: true,
    brackets: true,
    output: structures_1.ArgType.Boolean,
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
            description: "The message to remove user emoji reaction",
            rest: false,
            type: structures_1.ArgType.Message,
            pointer: 0,
            required: true,
        },
        {
            name: "emoji",
            description: "The reaction emoji to remove user from",
            rest: false,
            required: true,
            pointer: 1,
            type: structures_1.ArgType.Emoji,
        },
        {
            name: "user ID",
            description: "The user to delete its reaction",
            required: true,
            rest: false,
            type: structures_1.ArgType.User,
        },
    ],
    async execute(ctx, [, message, emoji, user]) {
        const reaction = message.reactions.cache.find(r => r.emoji.toString() === emoji.toString() || r.emoji.id === emoji.id || r.emoji.name === emoji.name);
        return this.success(!!(await reaction?.users.remove(user).catch(ctx.noop)));
    },
});
//# sourceMappingURL=deleteUserMessageReaction.js.map