import { ArgType, NativeFunction, Return } from "../../structures"
import { buildComponent, disableButtons } from "../../functions/components"

export default new NativeFunction({
    name: "$disableButtonsOf",
    version: "2.2.0",
    description: "Disables all buttons of a message, returns bool",
    aliases: ["$disableAllButtonsOf"],
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
            description: "The message to disable buttons on",
            rest: false,
            required: true,
            type: ArgType.Message,
            pointer: 0
        },
        {
            name: "index",
            description: "The index of the row to disable",
            rest: false,
            type: ArgType.Number,
        },
    ],
    brackets: true,
    output: ArgType.Boolean,
    async execute(ctx, [, msg, index]) {
        const components = msg.components.map(x => buildComponent(x))

        components.forEach((comp, i) => {
            if (!Number.isFinite(index) || i === index) disableButtons(comp)
        })

        return this.success(!!(await msg.edit({ components: components.map((x) => x.toJSON()) }).catch(ctx.noop)))
    },
})