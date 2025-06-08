import { ArgType, NativeFunction, Return } from "../../structures"
import { buildComponent } from "../../functions/componentBuilders"

export default new NativeFunction({
    name: "$fetchComponents",
    version: "1.0.0",
    description: "Fetch a message's components, this will override any other component added to the response",
    aliases: ["$fetchRows"],
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel id to get the message from",
            rest: false,
            required: true,
            type: ArgType.TextChannel,
        },
        {
            name: "message ID",
            description: "The message id to get the components from",
            pointer: 0,
            rest: false,
            type: ArgType.Message,
            required: true,
        },
    ],
    brackets: false,
    execute(ctx, [, msg]) {
        ctx.container.components = (msg ?? ctx.message)?.components.map((x) => buildComponent(ctx, x)) ?? []
        return this.success()
    },
})