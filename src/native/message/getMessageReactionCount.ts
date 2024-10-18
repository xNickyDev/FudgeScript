import { parseEmoji, TextBasedChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$getMessageReactionCount",
    version: "1.0.0",
    description: "Gets the amount of users that have reacted to a specific emoji",
    unwrap: true,
    output: ArgType.Number,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel the message is located",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: TextBasedChannel) => i.isTextBased(),
        },
        {
            name: "message ID",
            description: "The message to get emoji count from",
            rest: false,
            type: ArgType.Message,
            pointer: 0,
            required: true,
        },
        {
            name: "emoji",
            description: "The emoji to get its user count",
            required: true,
            rest: false,
            type: ArgType.String,
        },
    ],
    execute(ctx, [, message, emote]) {
        const emoji = parseEmoji(emote)
        const reaction = message.reactions.cache.find(r => r.emoji.toString() === emoji?.toString() || r.emoji.id === emoji?.id || r.emoji.name === emoji?.name)
        return this.success(reaction?.count)
    },
})