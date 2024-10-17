import { BaseChannel, ChannelType, VoiceChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$setGuildAFKChannel",
    version: "1.5.0",
    description: "Sets the AFK channel for a guild, returns bool",
    unwrap: true,
    aliases: [
        "$setServerAFKChannel"
    ],
    output: ArgType.Boolean,
    args: [
        {
            name: "guild ID",
            description: "The guild to set AFK channel for",
            rest: false,
            type: ArgType.Guild,
            required: true,
        },
        {
            name: "channel ID",
            description: "The new AFK channel",
            rest: false,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.type === ChannelType.GuildVoice,
            pointer: 0
        },
    ],
    brackets: true,
    async execute(ctx, [guild, channel]) {
        return this.success((await guild.setAFKChannel(channel as VoiceChannel || null).catch(() => false)) !== false)
    },
})