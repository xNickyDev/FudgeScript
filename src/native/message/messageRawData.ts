import { RawMessageData } from "discord.js/typings/rawDataTypes"
import { ArgType, NativeFunction, Return } from "../../structures"
import { BaseChannel, TextBasedChannel, TextChannel } from "discord.js"

export default new NativeFunction({
    name: "$messageRawData",
    version: "1.5.0",
    description: "Returns the raw data of a message",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "channel ID",
            rest: false,
            required: true,
            description: "The channel to get the message from",
            type: ArgType.Channel,
            check: (i: BaseChannel) => "messages" in i,
        },
        {
            name: "message ID",
            description: "The message to get its raw data from",
            rest: false,
            type: ArgType.Message,
            pointer: 0,
            required: true,
        },
    ],
    output: ArgType.Json,
    async execute(ctx, [channel, message]) {
        channel ??= ctx.channel!
        message ??= ctx.message!
        const data = (await (channel as TextBasedChannel).messages.fetch(message.id).catch(ctx.noop))?.toJSON()
        
        return this.successJSON(data as RawMessageData)
    },
})