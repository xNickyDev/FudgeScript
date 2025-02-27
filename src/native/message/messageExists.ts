import { BaseChannel, TextChannel } from "discord.js"
import { ArgType, CompiledFunction, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$messageExists",
    version: "1.0.5",
    description: "Returns whether given message id exists",
    unwrap: true,
    output: ArgType.Boolean,
    brackets: true,
    args: [
        {
            name: "channel ID",
            rest: false,
            required: true,
            description: "The channel to get the message from",
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isTextBased(),
        },
        {
            name: "message ID",
            description: "The message to check for",
            rest: false,
            type: ArgType.String,
            required: true,
        },
    ],
    async execute(ctx, [ch, id]) {
        return this.success(
            CompiledFunction.IdRegex.test(id) && (await (ch as TextChannel).messages.fetch(id).catch(() => false)) !== false
        )
    },
})