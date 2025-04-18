import { GuildScheduledEventStatus } from "discord.js";
export declare enum ScheduledEventProperty {
    id = "id",
    userID = "userID",
    guildID = "guildID",
    channelID = "channelID",
    name = "name",
    userCount = "userCount",
    description = "description",
    startTimestamp = "startTimestamp",
    endTimestamp = "endTimestamp",
    timestamp = "timestamp",
    url = "url",
    cover = "cover",
    entityID = "entityID",
    location = "location",
    entityType = "entityType",
    privacyLevel = "privacyLevel",
    status = "status"
}
export declare const ScheduledEventProperties: import("../functions/defineProperties").Properties<typeof ScheduledEventProperty, import("discord.js").GuildScheduledEvent<GuildScheduledEventStatus>>;
//# sourceMappingURL=scheduledEvent.d.ts.map