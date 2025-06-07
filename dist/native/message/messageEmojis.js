"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const array_1 = __importDefault(require("../../functions/array"));
const EmojiRegex = /(<a?:\w+:\d+>)|([\p{Emoji_Presentation}\p{Extended_Pictographic}])/gu;
exports.default = new structures_1.NativeFunction({
    name: "$messageEmojis",
    description: "Retrieves all emojis of this message",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            rest: false,
            required: true,
            description: "The channel to pull message from",
            type: structures_1.ArgType.Channel,
            check: (i) => i.isTextBased(),
        },
        {
            name: "message ID",
            pointer: 0,
            description: "The message to get its emojis",
            rest: false,
            required: true,
            type: structures_1.ArgType.Message,
        },
        {
            name: "separator",
            rest: false,
            description: "The separator to use for every emoji",
            type: structures_1.ArgType.String,
        },
    ],
    output: (0, array_1.default)(),
    execute(ctx, [, message, sep]) {
        return this.success([...(message ?? ctx.message)?.content.matchAll(EmojiRegex)].map((x) => x[0]).join(sep ?? ", "));
    },
});
//# sourceMappingURL=messageEmojis.js.map