"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$addOnboardingPrompt",
    description: "Adds a new prompt for current onboarding",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "title",
            description: "The title for the prompt",
            rest: false,
            type: structures_1.ArgType.String,
            required: true,
        },
        {
            name: "type",
            description: "The type of the prompt",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: discord_js_1.GuildOnboardingPromptType
        },
    ],
    execute(ctx, [title, type]) {
        ctx.onboarding.prompts ??= [];
        ctx.onboarding.prompts.push({
            title,
            type: type || undefined,
            options: ctx.onboarding.options ?? [],
        });
        return this.success();
    },
});
//# sourceMappingURL=addOnboardingPrompt.js.map