"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$editGuildOnboarding",
    version: "2.1.0",
    description: "Edits the onboarding of a guild, returns bool",
    unwrap: true,
    aliases: [
        "$editServerOnboarding"
    ],
    output: structures_1.ArgType.Boolean,
    args: [
        {
            name: "guild ID",
            description: "The guild to edit onboarding on",
            rest: false,
            type: structures_1.ArgType.Guild,
            required: true,
        },
        {
            name: "enabled",
            description: "Whether to enable onboarding",
            rest: false,
            type: structures_1.ArgType.Boolean,
        },
        {
            name: "mode",
            description: "The mode of the onboarding",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: discord_js_1.GuildOnboardingMode
        },
        {
            name: "reason",
            description: "The reason for editing onboarding",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    brackets: true,
    async execute(ctx, [guild, enabled, mode, reason]) {
        return this.success((await guild.editOnboarding({
            mode: mode || undefined,
            enabled: enabled || undefined,
            defaultChannels: ctx.onboarding.defaultChannels || undefined,
            reason: reason || undefined
        }).catch(() => false)) !== false);
    },
});
//# sourceMappingURL=editGuildOnboarding.js.map