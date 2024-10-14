import { BaseChannel, VoiceBasedChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$channelVoiceRegion",
    version: "1.5.0",
    description: "Returns the region of a voice channel",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "channel ID",
            description: "The channel to get its region",
            rest: false,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isVoiceBased()
        },
    ],
    output: ArgType.String,
    execute(ctx, [ch]) {
        const channel = (ch ?? ctx.channel) as VoiceBasedChannel | undefined
        return this.success(channel?.rtcRegion)
    },
})