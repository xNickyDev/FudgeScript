"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
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
            type: structures_1.ArgType.TextChannel,
        },
        {
            name: "message ID",
            description: "The message to fetch its data",
            rest: false,
            required: true,
            pointer: 0,
            type: structures_1.ArgType.Message,
        },
    ],
    execute(ctx, [, msg]) {
        msg ??= ctx.message;
        if (msg) {
            ctx.container.content = msg.content;
            ctx.container.embeds.push(...msg.embeds.map(x => discord_js_1.EmbedBuilder.from(x)));
            ctx.container.components.push(...msg.components.map(x => x instanceof discord_js_1.ActionRow
                ? discord_js_1.ActionRowBuilder.from(x)
                : x instanceof discord_js_1.ContainerComponent
                    ? new discord_js_1.ContainerBuilder(x.toJSON())
                    : x instanceof discord_js_1.TextDisplayComponent
                        ? new discord_js_1.TextDisplayBuilder(x.toJSON())
                        : x instanceof discord_js_1.SeparatorComponent
                            ? new discord_js_1.SeparatorBuilder(x.toJSON())
                            : x instanceof discord_js_1.FileComponent
                                ? new discord_js_1.FileBuilder(x.toJSON())
                                : x instanceof discord_js_1.MediaGalleryComponent
                                    ? new discord_js_1.MediaGalleryBuilder(x.toJSON())
                                    : x instanceof discord_js_1.SectionComponent
                                        ? new discord_js_1.SectionBuilder(x.toJSON())
                                        : null));
            ctx.container.files.push(...msg.attachments.map(x => new discord_js_1.AttachmentBuilder(x.url, { name: x.name })));
            ctx.container.stickers.push(...msg.stickers.map(x => x.id));
        }
        return this.success();
    },
});
//# sourceMappingURL=fetchResponse.js.map