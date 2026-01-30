import { BaseChannel, ChannelType, VoiceChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$sendSoundboardSound",
    version: "2.7.0",
    description: "Sends a sound to a voice channel",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to send the sound to",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.type === ChannelType.GuildVoice,
        },
        {
            name: "sound ID",
            description: "The sound to send",
            rest: false,
            required: true,
            type: ArgType.SoundboardSound,
            pointer: 0,
            pointerProperty: "guild"
        },
    ],
    async execute(ctx, [chan, sound]) {
        await (chan as VoiceChannel).sendSoundboardSound(sound)
        return this.success()
    },
})