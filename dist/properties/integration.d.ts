import { Integration } from "discord.js";
export declare enum IntegrationProperty {
    id = "id",
    name = "name",
    type = "type",
    roleID = "roleID",
    userID = "userID",
    guildID = "guildID",
    enabled = "enabled",
    revoked = "revoked",
    syncing = "syncing",
    applicationID = "applicationID",
    enableEmoticons = "enableEmoticons",
    subscriberCount = "subscriberCount",
    syncedTimestamp = "syncedTimestamp",
    expireBehavior = "expireBehavior",
    expireGracePeriod = "expireGracePeriod",
    scopes = "scopes"
}
export declare const IntegrationProperties: import("../functions/defineProperties").Properties<typeof IntegrationProperty, Integration>;
//# sourceMappingURL=integration.d.ts.map