import { ActionRowBuilder, ContainerBuilder, FileBuilder, MediaGalleryBuilder, SeparatorBuilder, TextDisplayBuilder } from "discord.js";
import { Context } from "../structures";
export declare function buildComponent(comp: any): ContainerBuilder | FileBuilder | MediaGalleryBuilder | SeparatorBuilder | TextDisplayBuilder | ActionRowBuilder<import("@discordjs/builders").AnyComponentBuilder>;
/**
 * Builds an action row. This is only needed inside ComponentsV2 functions and should never be used outside this context.
 * @param ctx The current context.
 * @returns
 */
export declare function buildActionRow(ctx: Context): void;
//# sourceMappingURL=componentBuilders.d.ts.map