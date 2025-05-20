import { BaseChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"
import { StickerReturnType } from "./messageStickers"

export default new NativeFunction({
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
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isTextBased(),
        },
        {
            name: "message ID",
            pointer: 0,
            description: "The message to get its stickers",
            rest: false,
            required: true,
            type: ArgType.Message,
        },
        {
            name: "index",
            rest: false,
            required: true,
            description: "The index to get sticker",
            type: ArgType.Number,
        },
        {
            name: "type",
            rest: false,
            description: "The type to return, default is url",
            type: ArgType.Enum,
            enum: StickerReturnType
        }
    ],
    output: ArgType.Sticker,
    execute(ctx, [, message, index, type]) {
        type ??= StickerReturnType.url
        return this.success((message ?? ctx.message)?.stickers.at(index)?.[type])
    },
})