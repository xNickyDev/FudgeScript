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
    actions: (i) => i?.name,
    client: (i, sep) => Object.keys(i?.client ?? {}).join(sep ?? ", "),
    creatorId: (i) => i?.creatorId,
    enabled: (i) => i?.enabled,
    eventType: (i) => i?.eventType,
    exemptChannels: (i, sep) => (i && "exemptChannels" in i ? i.exemptChannels.map((x) => x.id).join(sep ?? ", ") : null),
    exemptRoles: (i, sep) => (i && "exemptRoles" in i ? i.exemptRoles.map((x) => x.id).join(sep ?? ", ") : null),
    guild: (i, sep) => Object.keys(i?.guild ?? {}).join(sep ?? ", "),
    id: (i) => i?.id,
    name: (i) => i?.name,
    triggerMetadata: (i, sep) => Object.keys(i?.triggerMetadata ?? {}).join(sep ?? ", "),
    triggerType: (i) => i?.triggerType,
})