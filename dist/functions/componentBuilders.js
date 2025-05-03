"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildActionRow = exports.buildComponent = void 0;
const discord_js_1 = require("discord.js");
const ComponentBuilders = {
    [discord_js_1.ComponentType.ActionRow]: discord_js_1.ActionRowBuilder,
    [discord_js_1.ComponentType.Container]: discord_js_1.ContainerBuilder,
    [discord_js_1.ComponentType.TextDisplay]: discord_js_1.TextDisplayBuilder,
    [discord_js_1.ComponentType.Separator]: discord_js_1.SeparatorBuilder,
    [discord_js_1.ComponentType.MediaGallery]: discord_js_1.MediaGalleryBuilder,
    [discord_js_1.ComponentType.File]: discord_js_1.FileBuilder,
    [discord_js_1.ComponentType.Section]: discord_js_1.SeparatorBuilder,
};
function buildComponent(comp) {
    return new ComponentBuilders[comp.type](comp.toJSON?.() ?? comp);
}
exports.buildComponent = buildComponent;
/**
 * Builds an action row. This is only needed inside ComponentsV2 functions and should never be used outside this context.
 * @param ctx The current context.
 * @returns
 */
function buildActionRow(ctx) {
    ctx.container.isComponentsV2 = true;
    const row = ctx.container.actionRow;
    if (!row)
        return;
    const comp = ctx.container.components.at(-1);
    if (comp instanceof discord_js_1.ContainerBuilder && ctx.container.isInside(discord_js_1.ComponentType.Container))
        comp.addActionRowComponents(row);
    else
        ctx.container.components.push(row);
    delete ctx.container.actionRow;
}
exports.buildActionRow = buildActionRow;
//# sourceMappingURL=componentBuilders.js.map