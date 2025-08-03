import { ActionRowBuilder, AnyComponentBuilder, ButtonBuilder, ChannelSelectMenuBuilder, ComponentType, ContainerBuilder, ContainerComponentBuilder, FileBuilder, MediaGalleryBuilder, MentionableSelectMenuBuilder, MessageActionRowComponentBuilder, RoleSelectMenuBuilder, SectionBuilder, SeparatorBuilder, StringSelectMenuBuilder, TextDisplayBuilder, UserSelectMenuBuilder } from "discord.js";
import { Context } from "../structures";
/**
 * Checks whether the specified component type is a top level component.
 * @param type The component type.
 * @param actionRow Whether to include action rows when checking. Defaults to true.
 * @returns
 */
export declare function isTopLevel(type: ComponentType, actionRow?: boolean): boolean;
/**
 * Builds a message component for action rows.
 * @param comp The component data.
 * @returns
 */
export declare function buildActionRow(comp: any): ButtonBuilder | StringSelectMenuBuilder | UserSelectMenuBuilder | ChannelSelectMenuBuilder | RoleSelectMenuBuilder | MentionableSelectMenuBuilder;
/**
 * Builds a top level component.
 * @param comp The component data.
 * @param ctx The current context, if any.
 * @returns
 */
export declare function buildComponent(comp: any, ctx?: Context): ContainerBuilder | FileBuilder | MediaGalleryBuilder | SectionBuilder | SeparatorBuilder | TextDisplayBuilder | ActionRowBuilder<AnyComponentBuilder>;
/**
 * Gets all components.
 * @param comp The component builders.
 * @returns
 */
export declare function getComponents(comp: ContainerBuilder | ContainerComponentBuilder | MessageActionRowComponentBuilder): import("@discordjs/builders").ChannelSelectMenuBuilder | import("@discordjs/builders").MentionableSelectMenuBuilder | import("@discordjs/builders").RoleSelectMenuBuilder | import("@discordjs/builders").SelectMenuBuilder | import("@discordjs/builders").UserSelectMenuBuilder | MessageActionRowComponentBuilder[] | ButtonBuilder | (ContainerBuilder | FileBuilder | MediaGalleryBuilder | SectionBuilder | SeparatorBuilder | TextDisplayBuilder | ActionRowBuilder<AnyComponentBuilder>)[] | undefined;
/**
 * Disables all button components.
 * @param comp The component builders.
 */
export declare function disableButtons(comp: any): void;
/**
 * Finds a button component.
 * @param comps The components to search through.
 * @param id The custom ID of the button to find.
 * @returns
 */
export declare function findButton(comps: Array<ContainerBuilder | ContainerComponentBuilder>, id: string): AnyComponentBuilder | undefined;
/**
 * Finds a select menu component.
 * @param comps The components to search through.
 * @param id The custom ID of the select menu to find.
 * @returns
 */
export declare function findSelectMenu(comps: Array<ContainerBuilder | ContainerComponentBuilder>, id: string): AnyComponentBuilder | undefined;
/**
 * Adds an action row. This is only needed inside ComponentsV2 functions and should never be used outside this context.
 * @param ctx The current context.
 * @returns
 */
export declare function addActionRow(ctx: Context): void;
//# sourceMappingURL=components.d.ts.map