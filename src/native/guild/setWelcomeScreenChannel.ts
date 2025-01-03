import { BaseChannel, ForumChannel, MediaChannel, NewsChannel, TextChannel, WelcomeChannelData } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$setWelcomeScreenChannel",
    version: "2.1.0",
    description: "Sets a new channel for the current welcome screen",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to link for this welcome channel",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i instanceof TextChannel || i instanceof NewsChannel || i instanceof ForumChannel || i instanceof MediaChannel,
            pointerProperty: "guild"
        },
        {
            name: "description",
            description: "The description to show for this welcome channel",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "emoji",
            description: "The emoji to display for this welcome channel",
            rest: false,
            type: ArgType.String,
        },
    ],
    execute(ctx, [ channel, desc, emoji ]) {
        const data = {
            channel: channel,
            description: desc,
            emoji: emoji || undefined
        } as WelcomeChannelData

        ctx.welcomeScreenChannels ??= []
        ctx.welcomeScreenChannels.push(data)

        return this.success()
    },
})