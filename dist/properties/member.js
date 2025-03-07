"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberProperties = exports.MemberProperty = void 0;
const discord_js_1 = require("discord.js");
const defineProperties_1 = __importDefault(require("../functions/defineProperties"));
var MemberProperty;
(function (MemberProperty) {
    MemberProperty["nickname"] = "nickname";
    MemberProperty["displayName"] = "displayName";
    MemberProperty["displayColor"] = "displayColor";
    MemberProperty["roles"] = "roles";
    MemberProperty["mention"] = "mention";
    MemberProperty["avatar"] = "avatar";
    MemberProperty["banner"] = "banner";
    MemberProperty["bannable"] = "bannable";
    MemberProperty["kickable"] = "kickable";
    MemberProperty["guildID"] = "guildID";
    MemberProperty["id"] = "id";
    MemberProperty["manageable"] = "manageable";
    MemberProperty["timeout"] = "timeout";
    MemberProperty["timedOutUntil"] = "timedOutUntil";
    MemberProperty["status"] = "status";
    MemberProperty["addedRoles"] = "addedRoles";
    MemberProperty["roleCount"] = "roleCount";
    MemberProperty["removedRoles"] = "removedRoles";
    MemberProperty["platform"] = "platform";
    MemberProperty["timestamp"] = "timestamp";
    MemberProperty["boosting"] = "boosting";
    MemberProperty["boostingSince"] = "boostingSince";
})(MemberProperty || (exports.MemberProperty = MemberProperty = {}));
exports.MemberProperties = (0, defineProperties_1.default)({
    timestamp: (i) => i instanceof discord_js_1.GuildMember ? i?.joinedTimestamp : new Date(i?.joined_at).getTime(),
    displayColor: (i) => i?.displayHexColor,
    mention: (i) => (0, discord_js_1.userMention)(i instanceof discord_js_1.GuildMember ? i.id : i?.user.id),
    displayName: (i) => i?.displayName,
    // Assuming m is old state
    addedRoles: (m, sep) => {
        if (!(m && "guild" in m))
            return null;
        return m?.guild.members.cache
            .get(m.id)
            ?.roles.cache.filter((r) => !m.roles.cache.has(r.id))
            .map((x) => x.id)
            .join(sep ?? ", ");
    },
    // Assuming m is old state
    removedRoles: (m, sep) => {
        if (!(m && "guild" in m))
            return null;
        const updated = m?.guild.members.cache.get(m.id);
        return m?.roles.cache
            .filter((r) => !updated?.roles.cache.has(r.id))
            .map((x) => x.id)
            .join(sep ?? ", ");
    },
    roleCount: (i) => (i instanceof discord_js_1.GuildMember ? i?.roles.cache.size : i?.roles.length) ?? 0,
    avatar: (i) => i instanceof discord_js_1.GuildMember ? i.displayAvatarURL() : i?.avatar ? new discord_js_1.CDN().avatar(i?.user.id, i?.avatar) : null,
    banner: (i) => i instanceof discord_js_1.GuildMember ? i.displayBannerURL() : i?.banner ? new discord_js_1.CDN().banner(i?.user.id, i?.banner) : null,
    nickname: (i) => i instanceof discord_js_1.GuildMember ? i?.nickname : i?.nick,
    roles: (i, sep) => (i instanceof discord_js_1.GuildMember ? i?.roles.cache.map((x) => x.id) : i?.roles)?.join(sep || ", "),
    bannable: (i) => i?.bannable ?? false,
    kickable: (i) => i?.kickable ?? false,
    manageable: (i) => i?.manageable ?? false,
    id: (i) => i instanceof discord_js_1.GuildMember ? i.id : i?.user.id,
    guildID: (i) => i?.guild.id,
    timedOutUntil: (i) => i instanceof discord_js_1.GuildMember ? (i?.isCommunicationDisabled() ? i.communicationDisabledUntil.getTime() : 0) : new Date(i?.communication_disabled_until).getTime(),
    timeout: (i) => i instanceof discord_js_1.GuildMember ? (i?.isCommunicationDisabled() ?? false) : !!i?.communication_disabled_until,
    status: (i) => i?.presence?.status,
    platform: (i, sep) => Object.keys(i?.presence?.clientStatus ?? {}).join(sep || ", "),
    boosting: (i) => (i instanceof discord_js_1.GuildMember ? i?.premiumSinceTimestamp : i?.premium_since) !== null,
    boostingSince: (i) => (i instanceof discord_js_1.GuildMember ? i?.premiumSinceTimestamp : new Date(i?.premium_since).getTime()) ?? 0,
});
//# sourceMappingURL=member.js.map