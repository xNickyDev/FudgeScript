import { BaseChannel, ChannelType, PartialGroupDMChannel, TextBasedChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$forward",
    version: "2.2.0",
    description: "Forwards a message to another channel, returns bool",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to forward message to",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isTextBased() && i.type !== ChannelType.GroupDM,
        },
        {
            name: "message ID",
            description: "The message to forward",
            rest: false,
            required: true,
            type: ArgType.Message,
        },
    ],
    output: ArgType.Boolean,
    async execute(ctx, [channel, message]) {
        return this.success(!!(await message.forward(channel as Exclude<TextBasedChannel, PartialGroupDMChannel>).catch(ctx.noop)))
    },
})