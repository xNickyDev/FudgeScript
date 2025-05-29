import { Integration, IntegrationExpireBehavior } from "discord.js"
import defineProperties from "../functions/defineProperties"

export enum IntegrationProperty {
    id = "id",
    name = "name",
    type = "type",
    roleID = "roleID",
    userID = "userID",
    guildID = "guildID",
    enabled = "enabled",
    revoked = "revoked",
    syncing = "syncing",
    accountID = "accountID",
    accountName = "accountName",
    applicationID = "applicationID",
    enableEmoticons = "enableEmoticons",
    subscriberCount = "subscriberCount",
    syncedTimestamp = "syncedTimestamp",
    expireBehavior = "expireBehavior",
    expireGracePeriod = "expireGracePeriod",
}

export const IntegrationProperties = defineProperties<typeof IntegrationProperty, Integration>({
    id: (i) => i?.id,
    name: (i) => i?.name,
    type: (i) => i?.type,
    roleID: (i) => i?.role?.id,
    userID: (i) => i?.user?.id,
    guildID: (i) => i?.guild.id,
    enabled: (i) => i?.enabled ?? false,
    revoked: (i) => i?.revoked ?? false,
    syncing: (i) => i?.syncing ?? false,
    accountID: (i) => i?.account.id,
    accountName: (i) => i?.account.name,
    applicationID: (i) => i?.application?.id,
    enableEmoticons: (i) => i?.enableEmoticons ?? false,
    subscriberCount: (i) => i?.subscriberCount,
    syncedTimestamp: (i) => i?.syncedTimestamp,
    expireBehavior: (i) => IntegrationExpireBehavior[i?.expireBehavior!],
    expireGracePeriod: (i) => i?.expireGracePeriod,
})