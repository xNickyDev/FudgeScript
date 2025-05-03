import {
    ActionRowBuilder,
    ComponentType,
    ContainerBuilder,
    FileBuilder,
    MediaGalleryBuilder,
    SeparatorBuilder,
    TextDisplayBuilder
} from "discord.js"
import { Context } from "../structures"

const ComponentBuilders = {
    [ComponentType.ActionRow as ComponentType]: ActionRowBuilder,
    [ComponentType.Container as ComponentType]: ContainerBuilder,
    [ComponentType.TextDisplay as ComponentType]: TextDisplayBuilder,
    [ComponentType.Separator as ComponentType]: SeparatorBuilder,
    [ComponentType.MediaGallery as ComponentType]: MediaGalleryBuilder,
    [ComponentType.File as ComponentType]: FileBuilder,
    [ComponentType.Section as ComponentType]: SeparatorBuilder,
}

export function buildComponent(comp: any) {
    return new ComponentBuilders[comp.type as ComponentType](comp.toJSON?.() ?? comp)
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