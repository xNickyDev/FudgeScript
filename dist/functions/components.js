"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addActionRow = exports.getLastComponent = exports.findSelectMenu = exports.findButton = exports.disableButtons = exports.getComponents = exports.buildComponent = exports.buildActionRow = exports.isTopLevel = void 0;
const discord_js_1 = require("discord.js");
const MessageComponentBuilders = {
    [discord_js_1.ComponentType.Button]: discord_js_1.ButtonBuilder,
    [discord_js_1.ComponentType.StringSelect]: discord_js_1.StringSelectMenuBuilder,
    [discord_js_1.ComponentType.UserSelect]: discord_js_1.UserSelectMenuBuilder,
    [discord_js_1.ComponentType.ChannelSelect]: discord_js_1.ChannelSelectMenuBuilder,
    [discord_js_1.ComponentType.RoleSelect]: discord_js_1.RoleSelectMenuBuilder,
    [discord_js_1.ComponentType.MentionableSelect]: discord_js_1.MentionableSelectMenuBuilder,
};
const TopLevelComponentBuilders = {
    [discord_js_1.ComponentType.ActionRow]: discord_js_1.ActionRowBuilder,
    [discord_js_1.ComponentType.Container]: discord_js_1.ContainerBuilder,
    [discord_js_1.ComponentType.TextDisplay]: discord_js_1.TextDisplayBuilder,
    [discord_js_1.ComponentType.Separator]: discord_js_1.SeparatorBuilder,
    [discord_js_1.ComponentType.MediaGallery]: discord_js_1.MediaGalleryBuilder,
    [discord_js_1.ComponentType.Section]: discord_js_1.SectionBuilder,
    [discord_js_1.ComponentType.File]: discord_js_1.FileBuilder,
};
/**
 * Checks whether the specified component type is a top level component.
 * @param type The component type.
 * @param actionRow Whether to include action rows when checking. Defaults to `true`.
 * @returns
 */
function isTopLevel(type, actionRow = true) {
    return (type in TopLevelComponentBuilders) && (actionRow || type !== discord_js_1.ComponentType.ActionRow);
}
exports.isTopLevel = isTopLevel;
/**
 * Builds a message component for action rows.
 * @param comp The component data.
 * @returns
 */
function buildActionRow(comp) {
    const type = comp.type;
    return new MessageComponentBuilders[type](comp.toJSON?.() ?? comp);
}
exports.buildActionRow = buildActionRow;
/**
 * Builds a top level component.
 * @param comp The component data.
 * @param ctx The current context, if any.
 * @returns
 */
function buildComponent(comp, ctx) {
    const type = comp.type;
    if (ctx && isTopLevel(type, false))
        ctx.container.isComponentsV2 = true;
    return new TopLevelComponentBuilders[type](comp.toJSON?.() ?? comp);
}
exports.buildComponent = buildComponent;
/**
 * Gets all components.
 * @param comp The component builders.
 * @returns
 */
function getComponents(comp) {
    if (comp instanceof discord_js_1.ButtonBuilder || comp instanceof discord_js_1.BaseSelectMenuBuilder)
        return comp;
    if (comp instanceof discord_js_1.ActionRowBuilder)
        return comp.components;
    if (comp instanceof discord_js_1.SectionBuilder && comp.accessory instanceof discord_js_1.ButtonBuilder)
        return new Array(comp.accessory);
    if (comp instanceof discord_js_1.ContainerBuilder)
        return comp.components.map((x) => buildComponent(x.toJSON()));
    return;
}
exports.getComponents = getComponents;
/**
 * Disables all button components.
 * @param comp The component builders.
 */
function disableButtons(comp) {
    if (comp instanceof discord_js_1.ButtonBuilder) {
        comp.setDisabled(true);
    }
    else if (comp instanceof discord_js_1.ActionRowBuilder) {
        comp.components.forEach(disableButtons);
    }
    else if (comp instanceof discord_js_1.SectionBuilder && comp.accessory instanceof discord_js_1.ButtonBuilder) {
        comp.accessory.setDisabled(true);
    }
    else if (comp instanceof discord_js_1.ContainerBuilder) {
        comp.components.forEach(disableButtons);
    }
}
exports.disableButtons = disableButtons;
/**
 * Flattens all button components.
 * @param comps The components to flatten.
 * @returns
 */
function flattenButtons(comps) {
    return comps.flatMap((x) => {
        console.log(x);
        if (x instanceof discord_js_1.ActionRowBuilder)
            return x.components;
        if (x instanceof discord_js_1.SectionBuilder && x.accessory instanceof discord_js_1.ButtonBuilder)
            return [x.accessory];
        if (x instanceof discord_js_1.ContainerBuilder)
            return flattenButtons(x.components);
        return [];
    }).filter((x) => x instanceof discord_js_1.ButtonBuilder);
}
/**
 * Finds a button component.
 * @param comps The components to search through.
 * @param id The custom ID of the button to find.
 * @returns
 */
function findButton(comps, id) {
    return flattenButtons(comps).find((x) => "custom_id" in x.data && x.data.custom_id === id);
}
exports.findButton = findButton;
/**
 * Flattens all select menu components.
 * @param comps The components to flatten.
 * @returns
 */
function flattenSelectMenus(comps) {
    return comps.flatMap((x) => {
        if (x instanceof discord_js_1.ActionRowBuilder)
            return x.components;
        if (x instanceof discord_js_1.ContainerBuilder)
            flattenSelectMenus(x.components.map((c) => buildComponent(c.toJSON())));
        return [];
    }).filter((x) => !!x && !(x instanceof discord_js_1.ButtonBuilder));
}
/**
 * Finds a select menu component.
 * @param comps The components to search through.
 * @param id The custom ID of the select menu to find.
 * @returns
 */
function findSelectMenu(comps, id) {
    return flattenSelectMenus(comps).find((x) => "custom_id" in x.data && x.data.custom_id === id);
}
exports.findSelectMenu = findSelectMenu;
/**
 * Gets the last component of the current label or action row.
 * @param ctx The current context.
 * @returns
 */
function getLastComponent(ctx) {
    return (ctx.component.label?.data.component ?? ctx.container.actionRow?.components[0]);
}
exports.getLastComponent = getLastComponent;
/**
 * Adds an action row to the components. This is mostly needed inside ComponentsV2 functions.
 * @param ctx The current context.
 * @param cv2 Whether to set the ComponentsV2 flag. Defaults to `true`.
 * @returns
 */
function addActionRow(ctx, cv2 = true) {
    if (cv2)
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
exports.addActionRow = addActionRow;
//# sourceMappingURL=components.js.map