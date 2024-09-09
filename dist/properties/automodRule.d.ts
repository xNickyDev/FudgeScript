import { AutoModerationRule } from "discord.js";
export declare enum AutomodRuleProperty {
    id = "id",
    name = "name",
    actions = "actions",
    authorID = "authorID",
    enabled = "enabled",
    eventType = "eventType",
    exemptChannels = "exemptChannels",
    exemptRoles = "exemptRoles",
    triggerMetadata = "triggerMetadata",
    triggerType = "triggerType"
}
export declare const AutomodRuleProperties: import("../functions/defineProperties").Properties<typeof AutomodRuleProperty, AutoModerationRule>;
//# sourceMappingURL=automodRule.d.ts.map