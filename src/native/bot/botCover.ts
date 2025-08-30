import { ImageExtension, ImageSize, Team } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$botCover",
    version: "2.5.0",
    description: "Returns the client's cover image",
    aliases: [
        "$clientCover"
    ],
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "size",
            description: "The size to use for the image",
            rest: false,
            type: ArgType.Number,
        },
        {
            name: "extension",
            description: "The extension to use for the image",
            rest: false,
            type: ArgType.String,
        },
    ],
    output: ArgType.URL,
    execute(ctx, [size, ext]) {
        return this.success(ctx.client.application.coverURL({
            extension: (ext as ImageExtension) || undefined,
            size: (size as ImageSize) || 2048,
        }))
    },
})