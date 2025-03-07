import { APIInteractionGuildMember, CDN, GuildMember, userMention } from "discord.js"
import defineProperties from "../functions/defineProperties"

export enum MemberProperty {
    nickname = "nickname",
    displayName = "displayName",
    displayColor = "displayColor",
    roles = "roles",
    mention = "mention",
    avatar = "avatar",
    banner = "banner",
    bannable = "bannable",
    kickable = "kickable",
    guildID = "guildID",
    id = "id",
    manageable = "manageable",
    timeout = "timeout",
    timedOutUntil = "timedOutUntil",
    status = "status",
    addedRoles = "addedRoles",
    roleCount = "roleCount",
    removedRoles = "removedRoles",
    platform = "platform",
    timestamp = "timestamp",
    boosting = "boosting",
    boostingSince = "boostingSince",
}

export const MemberProperties = defineProperties<typeof MemberProperty, GuildMember | APIInteractionGuildMember>({
    timestamp: (i) => i instanceof GuildMember ? i?.joinedTimestamp : new Date(i?.joined_at!).getTime(),
    displayColor: (i) => (i as GuildMember)?.displayHexColor,
    mention: (i) => userMention(i instanceof GuildMember ? i.id : i?.user.id!),
    displayName: (i) => (i as GuildMember)?.displayName,
    // Assuming m is old state
    addedRoles: (m, sep) => {
        if (!(m && "guild" in m)) return null
        return m?.guild.members.cache
            .get(m.id)
            ?.roles.cache.filter((r) => !m.roles.cache.has(r.id))
            .map((x) => x.id)
            .join(sep ?? ", ")
    },
    // Assuming m is old state
    removedRoles: (m, sep) => {
        if (!(m && "guild" in m)) return null
        const updated = m?.guild.members.cache.get(m.id)
        return m?.roles.cache
            .filter((r) => !updated?.roles.cache.has(r.id))
            .map((x) => x.id)
            .join(sep ?? ", ")
    },
    roleCount: (i) => (i instanceof GuildMember ? i?.roles.cache.size : i?.roles.length) ?? 0,
    avatar: (i) => i instanceof GuildMember ? i.displayAvatarURL() : i?.avatar ? new CDN().avatar(i?.user.id!, i?.avatar) : null,
    banner: (i) => i instanceof GuildMember ? i.displayBannerURL() : i?.banner ? new CDN().banner(i?.user.id!, i?.banner) : null,
    nickname: (i) => i instanceof GuildMember ? i?.nickname : i?.nick,
    roles: (i, sep) => (i instanceof GuildMember ? i?.roles.cache.map((x) => x.id) : i?.roles)?.join(sep || ", "),
    bannable: (i) => (i as GuildMember)?.bannable ?? false,
    kickable: (i) => (i as GuildMember)?.kickable ?? false,
    manageable: (i) => (i as GuildMember)?.manageable ?? false,
    id: (i) => i instanceof GuildMember ? i.id : i?.user.id,
    guildID: (i) => (i as GuildMember)?.guild.id,
    timedOutUntil: (i) => i instanceof GuildMember ? (i?.isCommunicationDisabled() ? i.communicationDisabledUntil.getTime() : 0) : new Date(i?.communication_disabled_until!).getTime(),
    timeout: (i) => i instanceof GuildMember ? (i?.isCommunicationDisabled() ?? false) : !!i?.communication_disabled_until,
    status: (i) => (i as GuildMember)?.presence?.status,
    platform: (i, sep) => Object.keys((i as GuildMember)?.presence?.clientStatus ?? {}).join(sep || ", "),
    boosting: (i) => (i instanceof GuildMember ? i?.premiumSinceTimestamp : i?.premium_since) !== null,
    boostingSince: (i) => (i instanceof GuildMember ? i?.premiumSinceTimestamp : new Date(i?.premium_since!).getTime()) ?? 0,
})