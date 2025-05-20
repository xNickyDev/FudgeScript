"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const messageStickers_1 = require("./messageStickers");
exports.default = new structures_1.NativeFunction({
    name: "$messageSticker",
    version: "1.4.0",
    description: "Retrieves a sticker of this message",
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
            description: "The message to get its stickers",
            rest: false,
            required: true,
            type: structures_1.ArgType.Message,
        },
        {
            name: "index",
            rest: false,
            required: true,
            description: "The index to get sticker",
            type: structures_1.ArgType.Number,
        },
        {
            name: "type",
            rest: false,
            description: "The type to return, default is url",
            type: structures_1.ArgType.Enum,
            enum: messageStickers_1.StickerReturnType
        }
    ],
    output: structures_1.ArgType.Sticker,
    execute(ctx, [, message, index, type]) {
        type ??= messageStickers_1.StickerReturnType.url;
        return this.success((message ?? ctx.message)?.stickers.at(index)?.[type]);
    },
});
//# sourceMappingURL=messageSticker.js.map