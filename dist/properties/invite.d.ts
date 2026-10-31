import { Invite, TargetUsersJobStatusForInvite } from "discord.js";
export declare enum InviteProperty {
    authorID = "authorID",
    channelID = "channelID",
    guildID = "guildID",
    uses = "uses",
    maxUses = "maxUses",
    maxAge = "maxAge",
    timestamp = "timestamp",
    code = "code",
    url = "url",
    type = "type",
    expiresTimestamp = "expiresTimestamp",
    temporary = "temporary",
    deletable = "deletable",
    memberCount = "memberCount",
    presenceCount = "presenceCount",
    targetType = "targetType",
    targetUser = "targetUser",
    roles = "roles"
}
export declare const InviteProperties: import("..").Properties<typeof InviteProperty, Invite>;
export declare enum InviteTargetUsersJobStatusProperty {
    completedTimestamp = "completedTimestamp",
    createdTimestamp = "createdTimestamp",
    errorMessage = "errorMessage",
    processedUsers = "processedUsers",
    status = "status",
    totalUsers = "totalUsers"
}
export declare const InviteTargetUsersJobStatusProperties: import("..").Properties<typeof InviteTargetUsersJobStatusProperty, TargetUsersJobStatusForInvite>;
//# sourceMappingURL=invite.d.ts.map