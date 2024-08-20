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
    guildId = "guildId",
    id = "id",
    name = "name",
    triggerMetadata = "triggerMetadata",
    triggerType = "triggerType",
}

export const AutomodRuleProperties = defineProperties<typeof AutomodRuleProperty, AutoModerationRule>({
    actions: (i) => JSON.stringify(i?.actions, undefined, 4),
    client: (i) => JSON.stringify(i?.client, undefined, 4),
    creatorId: (i) => i?.creatorId,
    enabled: (i) => i?.enabled,
    eventType: (i) => i?.eventType,
    exemptChannels: (i) => JSON.stringify(i?.exemptChannels?.map((x) => x.id)),
    exemptRoles: (i) => JSON.stringify(i?.exemptRoles?.map((x) => x.id)),
    guildId: (i) => i?.guild.id,
    id: (i) => i?.id,
    name: (i) => i?.name,
    triggerMetadata: (i) => JSON.stringify(i?.triggerMetadata, undefined, 4),
    triggerType: (i) => i?.triggerType,
})