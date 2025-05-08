import {
    ActionRowBuilder,
    ButtonBuilder,
    ChannelSelectMenuBuilder,
    Component,
    ComponentType,
    ContainerBuilder,
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

export function buildComponent(comp: any) {
    const type = comp.type as ComponentType
    const Builder = TopLevelComponentBuilders[type] ?? MessageComponentBuilders[type]
    return new Builder(comp.toJSON?.() ?? comp)
}

/**
 * Builds an action row. This is only needed inside ComponentsV2 functions and should never be used outside this context.
 * @param ctx The current context.
 * @returns 
 */
export function buildActionRow(ctx: Context) {
    ctx.container.isComponentsV2 = true

    const row = ctx.container.actionRow
    if (!row) return

    const comp = ctx.container.components.at(-1)

    if (comp instanceof ContainerBuilder && ctx.container.isInside(ComponentType.Container)) 
        comp.addActionRowComponents(row)
    else ctx.container.components.push(row)

    delete ctx.container.actionRow
}