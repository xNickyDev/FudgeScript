import { ChannelSelectMenuBuilder } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$editChannelSelectMenu",
    version: "1.5.0",
    description: "Edits a channel select menu",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "old custom ID",
            description: "The custom id of the menu to edit",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "new custom ID",
            description: "The new custom id to use for this menu",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "placeholder",
            description: "The placeholder to use for the menu",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "disabled",
            description: "Whether to keep this menu disabled",
            type: ArgType.Boolean,
            rest: false,
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
            name: "default channels",
            rest: true,
            type: ArgType.String,
            description: "The default selected channels of the menu"
        }
    ],
    execute(ctx, [old, id, placeholder, disabled, min, max, channels]) {
        for (let i = 0, len = ctx.container.components.length;i < len;i++) {
            const comp = ctx.container.components[i]
            const menu = comp.components[0]
            if (menu instanceof ChannelSelectMenuBuilder && menu.data.custom_id === old) {
                menu.setCustomId(id)
                
                if (placeholder) menu.setPlaceholder(placeholder)
                if (disabled !== null) menu.setDisabled(disabled)
                if (min !== null) menu.setMinValues(min)
                if (max !== null) menu.setMaxValues(max)
                if (channels.length) menu.setDefaultChannels(channels)

                console.log(placeholder, disabled, min, max, channels)

                break
            }
        }

        return this.success()
    },
})