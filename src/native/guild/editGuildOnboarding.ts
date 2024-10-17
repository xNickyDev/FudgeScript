import { GuildOnboardingMode } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$editGuildOnboarding",
    version: "1.5.0",
    description: "Edits the onboarding of a guild, returns bool",
    unwrap: true,
    aliases: [
        "$editServerOnboarding"
    ],
    output: ArgType.Boolean,
    args: [
        {
            name: "guild ID",
            description: "The guild to edit onboarding on",
            rest: false,
            type: ArgType.Guild,
            required: true,
        },
        {
            name: "enabled",
            description: "Whether to enable onboarding",
            rest: false,
            type: ArgType.Boolean,
        },
        {
            name: "mode",
            description: "The mode of the onboarding",
            rest: false,
            type: ArgType.Enum,
            enum: GuildOnboardingMode
        },
        {
            name: "reason",
            description: "The reason for editing onboarding",
            rest: false,
            type: ArgType.String,
        },
    ],
    brackets: true,
    async execute(ctx, [guild, enabled, mode, reason]) {
        return this.success((await guild.editOnboarding({
            mode: mode || undefined,
            enabled: enabled || undefined,
            defaultChannels: ctx.onboarding.defaultChannels || undefined,
            reason: reason || undefined
        }).catch(() => false)) !== false)
    },
})