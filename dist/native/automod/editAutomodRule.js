"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$editAutomodRule",
    version: "1.5.0",
    description: "Edits an automod rule on a guild, returns bool",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to edit automod rule on",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
        {
            name: "role ID",
            description: "The id of the automod rule to edit",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "name",
            description: "The new name for the automod rule",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "event",
            description: "The new event type for the automod rule",
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
            description: "The reason for editing the automod rule",
            rest: false,
            required: false,
            type: structures_1.ArgType.String
        },
    ],
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [guild, id, name, event, enabled, reason]) {
        const rule = await guild.autoModerationRules.edit(id, {
            name: name,
            eventType: event,
            triggerMetadata: ctx.automodRule.triggerMetadata,
            actions: ctx.automodRule.actions,
            exemptRoles: ctx.automodRule.exemptRoles,
            exemptChannels: ctx.automodRule.exemptChannels,
            enabled: enabled || undefined,
            reason: reason || undefined
        }).catch(ctx.noop);
        return this.success(!!rule);
    },
});
//# sourceMappingURL=editAutomodRule.js.map