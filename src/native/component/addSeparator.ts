import { ComponentType, ContainerBuilder, SeparatorBuilder, SeparatorSpacingSize } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"
import { buildActionRow } from "../../functions/buildActionRow"

export default new NativeFunction({
    name: "$addSeparator",
    version: "2.4.0",
    description: "Adds a new separator component to the current container",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "spacing",
            description: "The spacing of this separator",
            rest: false,
            required: true,
            type: ArgType.Enum,
            enum: SeparatorSpacingSize
        },
        {
            name: "divider",
            description: "Whether to show a divider line",
            rest: false,
            type: ArgType.Boolean,
        },
    ],
    execute(ctx, [spacing, divider]) {
        buildActionRow(ctx)
        const comp = ctx.container.components.at(-1)
        const sep = new SeparatorBuilder().setSpacing(spacing).setDivider(!!divider)

        if (comp instanceof ContainerBuilder && ctx.container.isInside(ComponentType.Container))
            comp.addSeparatorComponents(sep)
        else ctx.container.components.push(sep)

        return this.success()
    },
})