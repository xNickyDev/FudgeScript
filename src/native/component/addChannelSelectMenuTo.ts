import { ActionRowBuilder, ChannelSelectMenuBuilder } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$addChannelSelectMenuTo",
    version: "1.5.0",
    description: "Adds a channel select menu to a message, returns bool",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel id to pull message from",
            rest: false,
            required: true,
            type: ArgType.TextChannel
        },
        {
            name: "message ID",
            description: "The message to add row to",
            rest: false,
            required: true,
            type: ArgType.Message,
            pointer: 0
        },
        {
            name: "custom ID",
            description: "The custom id for this menu",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "placeholder",
            description: "The placeholder to use for the menu",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "min values",
            description: "The min values to choose for the menu",
            rest: false,
            type: ArgType.Number,
        },
        {
            name: "max values",
            description: "The max values to choose for the menu",
            rest: false,
            type: ArgType.Number,
        },
        {
            name: "disabled",
            description: "Whether the menu is disabled by default",
            rest: false,
            type: ArgType.Boolean
        },
        {
            name: "default channels",
            rest: true,
            type: ArgType.String,
            description: "The default selected channels to use"
        }
    ],
    output: ArgType.Boolean,
    async execute(ctx, [ , m, id, placeholder, min, max, disabled, channels ]) {
        const menu = new ChannelSelectMenuBuilder()
            .setDefaultChannels(channels)
            .setDisabled(disabled ?? false)
            .setCustomId(id)
            
        if (placeholder)
            menu.setPlaceholder(placeholder)
        if (min)
            menu.setMinValues(min)
        if (max)
            menu.setMaxValues(max)

        const components = m.components.map(x => ActionRowBuilder.from(x))
        components.at(-1)?.addComponents(menu)

        return this.success(
            !!(await m.edit({ components: components as ActionRowBuilder<ChannelSelectMenuBuilder>[] }).catch(ctx.noop))
        )
    }
})