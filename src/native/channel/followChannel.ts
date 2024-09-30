import { BaseChannel, ChannelType, NewsChannel, TextChannelResolvable } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$followChannel",
    version: "1.5.0",
    description: "Follows given announcement channel, returns bool",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to follow",
            type: ArgType.Channel,
            rest: false,
            required: true,
            check: (i: BaseChannel) => i.type === ChannelType.GuildAnnouncement,
        },
        {
            name: "channel ID",
            description: "The channel to crosspost messages in",
            type: ArgType.Channel,
            rest: false,
            required: true,
            check: (i: BaseChannel) => i.type === ChannelType.GuildText,
        },
        {
            name: "reason",
            description: "The reason for following the channel",
            type: ArgType.String,
            rest: false,
        }
    ],
    output: ArgType.Boolean,
    async execute(ctx, [news, chan, reason]) {
        return this.success(!!(await (news as NewsChannel).addFollower(chan as TextChannelResolvable, reason || undefined)))
    },
})