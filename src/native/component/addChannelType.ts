import { ActionRow, ChannelSelectMenuBuilder, ChannelType } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$addChannelType",
    version: "1.4.0",
    aliases: ["$addChannelTypes"],
    description: "Adds channel types to the last select menu",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "types",
            description: "The channel types to add",
            rest: true,
            enum: ChannelType,
            required: true,
            type: ArgType.Enum
        }
    ],
    execute(ctx, [ types ]) {
        const comp = ctx.container.components.at(-1)
        if (comp instanceof ActionRow && comp.components[0] instanceof ChannelSelectMenuBuilder) {
            comp.components[0].addChannelTypes(types)
        }
        return this.success()
    },
})