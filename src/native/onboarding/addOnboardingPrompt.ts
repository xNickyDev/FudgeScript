import { GuildOnboardingPromptType } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$addOnboardingPrompt",
    version: "2.4.0",
    description: "Adds a new prompt for current onboarding",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "title",
            description: "The title for the prompt",
            rest: false,
            type: ArgType.String,
            required: true,
        },
        {
            name: "type",
            description: "The type of the prompt",
            rest: false,
            type: ArgType.Enum,
            enum: GuildOnboardingPromptType
        },
    ],
    execute(ctx, [title, type]) {
        ctx.onboarding.prompts ??= []
        ctx.onboarding.prompts.push({
            title,
            type: type || undefined,
            options: ctx.onboarding.options ?? [],
        })
        return this.success()
    },
})