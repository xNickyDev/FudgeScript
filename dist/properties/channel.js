"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelProperties = exports.ChannelProperty = void 0;
const discord_js_1 = require("discord.js");
const defineProperties_1 = __importDefault(require("../functions/defineProperties"));
var ChannelProperty;
(function (ChannelProperty) {
    ChannelProperty["id"] = "id";
    ChannelProperty["type"] = "type";
    ChannelProperty["topic"] = "topic";
    ChannelProperty["bitrate"] = "bitrate";
    ChannelProperty["members"] = "members";
    ChannelProperty["name"] = "name";
    ChannelProperty["timestamp"] = "timestamp";
    ChannelProperty["flags"] = "flags";
    ChannelProperty["url"] = "url";
    ChannelProperty["position"] = "position";
    ChannelProperty["rawPosition"] = "rawPosition";
    ChannelProperty["guildID"] = "guildID";
    ChannelProperty["parentID"] = "parentID";
    ChannelProperty["nsfw"] = "nsfw";
    ChannelProperty["availableTags"] = "availableTags";
    ChannelProperty["appliedTags"] = "appliedTags";
    ChannelProperty["slowmode"] = "slowmode";
})(ChannelProperty || (exports.ChannelProperty = ChannelProperty = {}));
exports.ChannelProperties = (0, defineProperties_1.default)({
    bitrate: (i) => (i?.isVoiceBased() ? i.bitrate : undefined),
    id: (i) => i?.id,
    timestamp: (i) => i?.createdTimestamp,
    name: (i) => (i && "name" in i ? i.name : undefined),
    members: (i, sep) => i && "members" in i
        ? (i.members instanceof discord_js_1.Collection ? i.members : i.members.cache)
            .map((x) => x.id)
            .join(sep || ", ")
        : undefined,
    topic: (i) => (i && "topic" in i ? i.topic : undefined),
    type: (i) => discord_js_1.ChannelType[i?.type],
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
});
//# sourceMappingURL=channel.js.map