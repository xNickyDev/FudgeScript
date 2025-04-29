import { ActionRow, ChannelSelectMenuBuilder } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$addDefaultChannelOption",
    version: "1.4.0",
    aliases: [
        "$addDefaultChannels",
        "$addDefaultChannelOptions"
    ],
    description: "Adds default channel options to the last select menu",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel IDs",
            description: "The channel ids",
            rest: true,
            required: true,
            type: ArgType.String
        }
    ],
    execute(ctx, [ ids ]) {
        const comp = ctx.container.components.at(-1)
        if (comp instanceof ActionRow && comp.components[0] instanceof ChannelSelectMenuBuilder) {
            comp.components[0].addDefaultChannels(ids)
        }
        return this.success()
    },
})