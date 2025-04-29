import { ContainerBuilder } from "discord.js"
import { Context } from "../structures"

export function buildActionRow(ctx: Context) {
    ctx.container.isComponentsV2 = true
    const comp = ctx.container.components.at(-1)
    if (ctx.container.actionRow && comp instanceof ContainerBuilder) {
        comp.addActionRowComponents(ctx.container.actionRow)
        delete ctx.container.actionRow
    }
}