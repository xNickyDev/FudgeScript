import { BaseChannel, TextBasedChannel, TextChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"
import noop from "../../functions/noop"

export default new NativeFunction({
    name: "$lastMessageID",
    version: "1.2.0",
    brackets: false,
    aliases: [
        "$channelLastMessageID"
    ],
    unwrap: true,
    output: ArgType.Message,
    description: "Returns the latest message sent in a channel",
    args: [
        {
            name: "channel ID",
            description: "The channel to pull last message from",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => "messages" in i
        },
        {
            name: "user ID",
            description: "The user id to get its last message sent",
            rest: false,
            required: false,
            type: ArgType.User
        }
    ],
    async execute(ctx, [ ch, user ]) {
        ch ??= ctx.channel!
        if (user) {
            const messages = await (ch as TextBasedChannel).messages.fetch({ limit: 100 }).catch(ctx.noop)
            return this.success(messages ? messages.find(x => x.author.id === user.id)?.id : undefined)
        }
        return this.success((ch as TextChannel).lastMessageId)
    },
})