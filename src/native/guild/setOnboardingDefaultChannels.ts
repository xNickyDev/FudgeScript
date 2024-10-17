import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$setOnboardingDefaultChannels",
    version: "1.5.0",
    description: "Sets default channels for the current onboarding",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channels",
            description: "The channels that new members get opted into automatically",
            rest: true,
            required: true,
            type: ArgType.String,
        },
    ],
    execute(ctx, [channels]) {
        ctx.onboarding.defaultChannels = channels
        return this.success()
    },
})