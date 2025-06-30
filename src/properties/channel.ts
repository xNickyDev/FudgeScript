import { Channel, ChannelType, Collection, GuildMember } from "discord.js"
import defineProperties from "../functions/defineProperties"

export enum ChannelProperty {
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

export const ChannelProperties = defineProperties<typeof ChannelProperty, Channel>({
    bitrate: (i) => (i?.isVoiceBased() ? i.bitrate : undefined),
    id: (i) => i?.id,
    timestamp: (i) => i?.createdTimestamp,
    name: (i) => (i && "name" in i ? i.name : undefined),
    members: (i, sep) =>
        i && "members" in i
            ? ((i.members instanceof Collection ? i.members : i.members.cache) as Collection<string, GuildMember>)
                .map((x) => x.id)
                .join(sep || ", ")
            : undefined,
    topic: (i) => (i && "topic" in i ? i.topic : undefined),
    type: (i) => ChannelType[i?.type!],
    flags: (i, sep) => i?.flags?.toArray().join(sep ?? ", "),
    position: (i) => (i && "position" in i ? i.position : undefined),
    rawPosition: (i) => (i && "rawPosition" in i ? i.rawPosition : undefined),
    url: (i) => i?.url,
    guildID: (i) => (i && "guildId" in i ? i.guildId : undefined),
    parentID: (i) => (i && "parentId" in i ? i.parentId : undefined),
    nsfw: (i) => (i && "nsfw" in i ? i.nsfw : undefined),
    availableTags: (i, sep) => (i && "availableTags" in i ? i.availableTags.map((x) => x.id).join(sep ?? ", ") : undefined),
    appliedTags: (i, sep) => (i && "appliedTags" in i ? i.appliedTags.join(sep ?? ", ") : undefined),
    slowmode: (i) => (i && "rateLimitPerUser" in i ? i.rateLimitPerUser : undefined),
})