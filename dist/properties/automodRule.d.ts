import { AutoModerationRule } from "discord.js";
export declare enum AutomodRuleProperty {
    actions = "actions",
    creatorId = "creatorId",
    enabled = "enabled",
    eventType = "eventType",
    exemptChannels = "exemptChannels",
    exemptRoles = "exemptRoles",
    id = "id",
    name = "name",
    triggerMetadata = "triggerMetadata",
    triggerType = "triggerType"
}
export declare const AutomodRuleProperties: import("../functions/defineProperties").Properties<typeof AutomodRuleProperty, AutoModerationRule>;
//# sourceMappingURL=automodRule.d.ts.map