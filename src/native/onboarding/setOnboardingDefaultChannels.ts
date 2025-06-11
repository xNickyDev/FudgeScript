import { Channel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$setOnboardingDefaultChannels",
    version: "2.4.0",
    description: "Sets default channels for the current onboarding",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channels",
            description: "The channels that new members get opted into automatically",
            rest: true,
            required: true,
            type: ArgType.Channel,
        },
    ],
    execute(ctx, [channels]) {
        ctx.onboarding.defaultChannels = channels as Channel[]
        return this.success()
    },
})