import { AutoModerationRule } from "discord.js";
export declare enum AutomodRuleProperty {
    actions = "actions",
    client = "client",
    creatorId = "creatorId",
    enabled = "enabled",
    eventType = "eventType",
    exemptChannels = "exemptChannels",
    exemptRoles = "exemptRoles",
    guildId = "guildId",
    id = "id",
    name = "name",
    triggerMetadata = "triggerMetadata",
    triggerType = "triggerType"
}
export declare const AutomodRuleProperties: import("../functions/defineProperties").Properties<typeof AutomodRuleProperty, AutoModerationRule>;
//# sourceMappingURL=automodRule.d.ts.map