import { Channel } from "discord.js";
export declare enum ChannelProperty {
    id = "id",
    type = "type",
    topic = "topic",
    bitrate = "bitrate",
    members = "members",
    name = "name",
    timestamp = "timestamp",
    flags = "flags",
    url = "url",
    position = "position",
    rawPosition = "rawPosition",
    guildID = "guildID",
    parentID = "parentID",
    nsfw = "nsfw",
    availableTags = "availableTags",
    appliedTags = "appliedTags",
    slowmode = "slowmode"
}
export declare const ChannelProperties: import("../functions/defineProperties").Properties<typeof ChannelProperty, Channel>;
//# sourceMappingURL=channel.d.ts.map