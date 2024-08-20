import { AutoModerationRule } from "discord.js"
import defineProperties from "../functions/defineProperties"

export enum AutomodRuleProperty {
    actions = "actions",
    client = "client",
    creatorId = "creatorId",
    enabled = "enabled",
    eventType = "eventType",
    exemptChannels = "exemptChannels",
    exemptRoles = "exemptRoles",
    guild = "guild",
    id = "id",
    name = "name",
    triggerMetadata = "triggerMetadata",
    triggerType = "triggerType",
}

export const AutomodRuleProperties = defineProperties<typeof AutomodRuleProperty, AutoModerationRule>({
    actions: (i) => JSON.stringify(i?.actions) ?? [],
    client: (i) => JSON.stringify(i?.client),
    creatorId: (i) => i?.creatorId,
    enabled: (i) => i?.enabled,
    eventType: (i) => i?.eventType,
    exemptChannels: (i) => JSON.stringify(i?.exemptChannels) ?? [],
    exemptRoles: (i) => JSON.stringify(i?.exemptRoles) ?? [],
    guild: (i) => JSON.stringify(i?.guild),
    id: (i) => i?.id,
    name: (i) => i?.name,
    triggerMetadata: (i) => JSON.stringify(i?.triggerMetadata) ?? {},
    triggerType: (i) => i?.triggerType,
})