import { BaseChannel, VoiceBasedChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$setScheduledEventChannel",
    version: "2.2.0",
    description: "Sets the voice channel for the current scheduled event",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to set",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isVoiceBased()
        },
    ],
    output: ArgType.ScheduledEvent,
    async execute(ctx, [channel]) {
        ctx.scheduledEvent.channel = channel as VoiceBasedChannel
        return this.success()
    },
})