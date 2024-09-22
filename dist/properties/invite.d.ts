import { Invite } from "discord.js";
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
    temporary = "temporary"
}
export declare const InviteProperties: import("../functions/defineProperties").Properties<typeof InviteProperty, Invite>;
//# sourceMappingURL=invite.d.ts.map