import { ButtonBuilder, ActionRowBuilder } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$enableButtonsOf",
    version: "2.2.0",
    description: "Enables all buttons of a message, returns bool",
    aliases: ["$enableAllButtonsOf"],
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
            description: "The message to enable buttons on",
            rest: false,
            required: true,
            type: ArgType.Message,
            pointer: 0
        },
        {
            name: "index",
            description: "The index of the row to enable",
            rest: false,
            type: ArgType.Number,
        },
    ],
    brackets: true,
    output: ArgType.Boolean,
    async execute(ctx, [, msg, index]) {
        const components = msg.components.map(x => ActionRowBuilder.from(x))

        for (let i = 0, len = components.length; i < len; i++) {
            if (Number.isFinite(index) && i !== index) continue
            const actionRow = new ActionRowBuilder()

            components[i]?.components.forEach(comp => {
                if (comp instanceof ButtonBuilder) {
                    actionRow.addComponents(comp.setDisabled(false))
                } else {
                    actionRow.addComponents(comp)
                }
            })
            if (i === index) break
        }

        return this.success(!!(await msg.edit({ components: components as ActionRowBuilder<ButtonBuilder>[] }).catch(ctx.noop)))
    },
})