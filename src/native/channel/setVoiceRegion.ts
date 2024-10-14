import { BaseChannel, VoiceChannel, VoiceRegion } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$setVoiceRegion",
    version: "1.5.0",
    description: "Sets the region of a voice channel, returns bool",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to set region",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isVoiceBased()
        },
        {
            name: "region",
            description: "The region to set",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "reason",
            description: "Reason to set the voice region",
            rest: false,
            required: false,
            type: ArgType.String
        }
    ],
    output: ArgType.Boolean,
    async execute(ctx, [voice, region, reason]) {
        return this.success(!!(await (voice as VoiceChannel).setRTCRegion(region, reason ?? undefined).catch(ctx.noop)))
    },
})