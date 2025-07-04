import {
    ActionRowBuilder,
    AnyComponentBuilder,
    ButtonBuilder,
    ChannelSelectMenuBuilder,
    ComponentBuilder,
    ComponentType,
    ContainerBuilder,
    ContainerComponentBuilder,
    FileBuilder,
    MediaGalleryBuilder,
    MentionableSelectMenuBuilder,
    RoleSelectMenuBuilder,
    SectionBuilder,
    SeparatorBuilder,
    StringSelectMenuBuilder,
    TextDisplayBuilder,
    UserSelectMenuBuilder
} from "discord.js"
import { Context } from "../structures"

const MessageComponentBuilders = {
    [ComponentType.Button as ComponentType]: ButtonBuilder,
    [ComponentType.StringSelect as ComponentType]: StringSelectMenuBuilder,
    [ComponentType.UserSelect as ComponentType]: UserSelectMenuBuilder,
    [ComponentType.ChannelSelect as ComponentType]: ChannelSelectMenuBuilder,
    [ComponentType.RoleSelect as ComponentType]: RoleSelectMenuBuilder,
    [ComponentType.MentionableSelect as ComponentType]: MentionableSelectMenuBuilder,
}

const TopLevelComponentBuilders = {
    [ComponentType.ActionRow as ComponentType]: ActionRowBuilder,
    [ComponentType.Container as ComponentType]: ContainerBuilder,
    [ComponentType.TextDisplay as ComponentType]: TextDisplayBuilder,
    [ComponentType.Separator as ComponentType]: SeparatorBuilder,
    [ComponentType.MediaGallery as ComponentType]: MediaGalleryBuilder,
    [ComponentType.Section as ComponentType]: SectionBuilder,
    [ComponentType.File as ComponentType]: FileBuilder,
}

/**
 * Checks whether the specified component type is a top level component.
 * @param type The component type.
 * @param actionRow Whether to include action rows when checking. Defaults to true.
 * @returns 
 */
export function isTopLevel(type: ComponentType, actionRow: boolean = true) {
    return (type in TopLevelComponentBuilders) && (actionRow || type !== ComponentType.ActionRow)
}

/**
 * Builds a message component for action rows.
 * @param comp The component data.
 * @returns 
 */
export function buildActionRow(comp: any) {
    const type = comp.type as ComponentType
    return new MessageComponentBuilders[type](comp.toJSON?.() ?? comp)
}

/**
 * Builds a top level component.
 * @param comp The component data.
 * @param ctx The current context, if any.
 * @returns 
 */
export function buildComponent(comp: any, ctx?: Context) {
    const type = comp.type as ComponentType
    if (ctx && isTopLevel(type, false)) ctx.container.isComponentsV2 = true
    return new TopLevelComponentBuilders[type](comp.toJSON?.() ?? comp)
}

/**
 * Disables all button components.
 * @param comp The component builders.
 */
export function disableButtons(comp: any) {
    if (comp instanceof ButtonBuilder) {
        comp.setDisabled(true)
    } else if (comp instanceof ActionRowBuilder) {
        comp.components.forEach(disableButtons)
    } else if (comp instanceof SectionBuilder && comp.accessory instanceof ButtonBuilder) {
        comp.accessory.setDisabled(true)
    } else if (comp instanceof ContainerBuilder) {
        comp.components.forEach(disableButtons)
    }
}

/**
 * Flattens all button components.
 * @param comps The components to flatten.
 * @returns 
 */
function flattenButtons(comps: Array<ContainerBuilder | ContainerComponentBuilder>): AnyComponentBuilder[] {
    return comps.flatMap((x) => {
        console.log(x)
        if (x instanceof ActionRowBuilder) return x.components
        if (x instanceof SectionBuilder && x.accessory instanceof ButtonBuilder) return [x.accessory]
        if (x instanceof ContainerBuilder) return flattenButtons(x.components)
        return []
    }).filter((x) => x instanceof ButtonBuilder)
}

/**
 * Finds a button component.
 * @param comps The components to search through.
 * @param id The custom ID of the button to find.
 * @returns
 */
export function findButton(comps: Array<ContainerBuilder | ContainerComponentBuilder>, id: string) {
    return flattenButtons(comps).find((x) => "custom_id" in x.data && x.data.custom_id === id)
}

/**
 * Flattens all select menu components.
 * @param comps The components to flatten.
 * @returns 
 */
function flattenSelectMenus(comps: Array<ContainerBuilder | ContainerComponentBuilder>): AnyComponentBuilder[] {
    return comps.flatMap((x) => {
        if (x instanceof ActionRowBuilder) return x.components
        if (x instanceof ContainerBuilder) flattenSelectMenus(x.components.map((c) => buildComponent(c)))
        return []
    }).filter((x) => !!x && !(x instanceof ButtonBuilder))
}

/**
 * Finds a select menu component.
 * @param comps The components to search through.
 * @param id The custom ID of the select menu to find.
 * @returns
 */
export function findSelectMenu(comps: Array<ContainerBuilder | ContainerComponentBuilder>, id: string) {
    return flattenSelectMenus(comps).find((x) => "custom_id" in x.data && x.data.custom_id === id)
}

/**
 * Adds an action row. This is only needed inside ComponentsV2 functions and should never be used outside this context.
 * @param ctx The current context.
 * @returns 
 */
export function addActionRow(ctx: Context) {
    ctx.container.isComponentsV2 = true

    const row = ctx.container.actionRow
    if (!row) return

    const comp = ctx.container.components.at(-1)

    if (comp instanceof ContainerBuilder && ctx.container.isInside(ComponentType.Container)) 
        comp.addActionRowComponents(row)
    else ctx.container.components.push(row)

    delete ctx.container.actionRow
}