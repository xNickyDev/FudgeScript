"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$createAutomodRule",
    version: "1.5.0",
    description: "Creates a new automod rule, returns rule id",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to create automod rule on",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
        {
            name: "name",
            description: "The name of the automod rule",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "trigger",
            description: "The trigger type of the automod rule",
            rest: false,
            required: true,
            type: structures_1.ArgType.Enum,
            enum: discord_js_1.AutoModerationRuleTriggerType
        },
        {
            name: "event",
            description: "The event type of the automod rule",
            rest: false,
            required: true,
            type: structures_1.ArgType.Enum,
            enum: discord_js_1.AutoModerationRuleEventType
        },
        {
            name: "enabled",
            description: "Whether the automod rule should be enabled",
            rest: false,
            required: false,
            type: structures_1.ArgType.Boolean
        },
        {
            name: "reason",
            description: "The reason for creating the automod rule",
            rest: false,
            required: false,
            type: structures_1.ArgType.String
        },
    ],
    output: structures_1.ArgType.Number,
    async execute(ctx, [guild, name, trigger, event, enabled, reason]) {
        console.log("Rule Trigger Metadata", ctx.automodRule.triggerMetadata);
        console.log("Rule Action", ctx.automodRule.actions);
        const rule = await guild.autoModerationRules.create({
            name: name,
            eventType: event,
            triggerType: trigger,
            triggerMetadata: ctx.automodRule.triggerMetadata,
            actions: ctx.automodRule.actions ?? [],
            exemptRoles: [],
            exemptChannels: [],
            enabled: enabled ?? true,
            reason: reason || undefined
        }).catch(ctx.noop);
        return this.success(rule?.id);
    },
});
//# sourceMappingURL=createAutomodRule.js.map