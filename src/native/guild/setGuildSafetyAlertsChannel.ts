import { BaseChannel, ChannelType, TextChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$setGuildSafetyAlertsChannel",
    version: "1.5.0",
    description: "Sets the safety alerts channel for a guild, returns bool",
    unwrap: true,
    aliases: [
        "$setServerSafetyAlertsChannel"
    ],
    output: ArgType.Boolean,
    args: [
        {
            name: "guild ID",
            description: "The guild to set safety alerts channel for",
            rest: false,
            type: ArgType.Guild,
            required: true,
        },
        {
            name: "channel ID",
            description: "The new safety alerts channel",
            rest: false,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.type === ChannelType.GuildText,
            pointer: 0
        },
    ],
    brackets: true,
    async execute(ctx, [guild, channel]) {
        return this.success((await guild.setSafetyAlertsChannel(channel as TextChannel || null).catch(() => false)) !== false)
    },
})