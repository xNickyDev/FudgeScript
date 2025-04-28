import { ContainerBuilder, SeparatorBuilder, SeparatorSpacingSize } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$addSeparator",
    version: "2.3.0",
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
        const comp = ctx.container.components.at(-1)

        const row = ctx.container.actionRow
        if (row && comp instanceof ContainerBuilder) {
            comp.addActionRowComponents(row)
            delete ctx.container.actionRow
        }
        
        if (comp instanceof ContainerBuilder) {
            const sep = new SeparatorBuilder().setSpacing(spacing).setDivider(typeof(divider) === "boolean" ? divider : undefined)
            comp.addSeparatorComponents(sep)
        }
        return this.success()
    },
})