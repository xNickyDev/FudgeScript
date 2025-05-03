import {
    ActionRow,
    ActionRowBuilder,
    AttachmentBuilder,
    ContainerBuilder,
    ContainerComponent,
    EmbedBuilder,
    FileBuilder,
    FileComponent,
    MediaGalleryBuilder,
    MediaGalleryComponent,
    SectionBuilder,
    SectionComponent,
    SeparatorBuilder,
    SeparatorComponent,
    TextDisplayBuilder,
    TextDisplayComponent,
} from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$fetchResponse",
    version: "1.4.0",
    brackets: false,
    unwrap: true,
    description: "Fetches all data from the message and loads it to response, this includes: content, embeds, components, attachments, stickers",
    args: [
        {
            name: "channel ID",
            description: "The channel to delete this message from",
            rest: false,
            required: true,
            type: ArgType.TextChannel,
        },
        {
            name: "message ID",
            description: "The message to fetch its data",
            rest: false,
            required: true,
            pointer: 0,
            type: ArgType.Message,
        },
    ],
    execute(ctx, [, msg ]) {
        msg ??= ctx.message!
        if (msg) {
            ctx.container.content = msg.content
            ctx.container.embeds.push(...msg.embeds.map(x => EmbedBuilder.from(x)))
            ctx.container.components.push(...msg.components.map(x =>
                x instanceof ActionRow
                    ? ActionRowBuilder.from(x)
                    : x instanceof ContainerComponent
                        ? new ContainerBuilder(x.toJSON())
                        : x instanceof TextDisplayComponent
                            ? new TextDisplayBuilder(x.toJSON())
                            : x instanceof SeparatorComponent
                                ? new SeparatorBuilder(x.toJSON())
                                : x instanceof FileComponent
                                    ? new FileBuilder(x.toJSON())
                                    : x instanceof MediaGalleryComponent
                                        ? new MediaGalleryBuilder(x.toJSON())
                                        : x instanceof SectionComponent
                                            ? new SectionBuilder(x.toJSON())
                                            : null as never
            ))
            ctx.container.files.push(...msg.attachments.map(x => new AttachmentBuilder(x.url, { name: x.name })))
            ctx.container.stickers.push(...msg.stickers.map(x => x.id))
        }
        return this.success()
    },
})