import { ArgType, EnumLike, IArg } from "./NativeFunction";
export declare class Arg {
    private constructor();
    static optionalString(name?: string, desc?: string): IArg<ArgType.String, boolean, false, EnumLike>;
    static requiredString(name?: string, desc?: string): IArg<ArgType.String, true, false, EnumLike>;
    static restString(name?: string, desc?: string): IArg<ArgType.String, true, true, EnumLike>;
    static optionalMessage(name?: string, desc?: string): IArg<ArgType.Message, boolean, false, EnumLike>;
    static restMessage(name?: string, desc?: string): IArg<ArgType.Message, boolean, true, EnumLike>;
    static requiredMessage(name?: string, desc?: string): IArg<ArgType.Message, true, false, EnumLike>;
    static optionalChannel(name?: string, desc?: string): IArg<ArgType.Channel, boolean, false, EnumLike>;
    static restChannel(name?: string, desc?: string): IArg<ArgType.Channel, true, true, EnumLike>;
    static requiredChannel(name?: string, desc?: string): IArg<ArgType.Channel, boolean, true, EnumLike>;
    static optionalEnum<T extends EnumLike>(en: T, name?: string, desc?: string): IArg<ArgType.Enum, boolean, false, T>;
    static requiredEnum<T extends EnumLike>(en: T, name?: string, desc?: string): IArg<ArgType.Enum, true, false, T>;
    static restEnum<T extends EnumLike>(en: T, name?: string, desc?: string): IArg<ArgType.Enum, boolean, true, T>;
    static optionalColor(name?: string, desc?: string): IArg<ArgType.Color, boolean, false, EnumLike>;
    static requiredColor(name?: string, desc?: string): IArg<ArgType.Color, true, false, EnumLike>;
    static restColor(name?: string, desc?: string): IArg<ArgType.Color, true, true, EnumLike>;
    static optionalGuild(name?: string, desc?: string): IArg<ArgType.Guild, boolean, false, EnumLike>;
    static restGuild(name?: string, desc?: string): IArg<ArgType.Guild, true, true, EnumLike>;
    static requiredGuild(name?: string, desc?: string): IArg<ArgType.Guild, true, false, EnumLike>;
    static optionalRole(name?: string, desc?: string): IArg<ArgType.Role, boolean, false, EnumLike>;
    static requiredRole(name?: string, desc?: string): IArg<ArgType.Role, true, false, EnumLike>;
    static restRole(name?: string, desc?: string): IArg<ArgType.Role, true, true, EnumLike>;
    static optionalSticker(name?: string, desc?: string): IArg<ArgType.Sticker, boolean, false, EnumLike>;
    static requiredSticker(name?: string, desc?: string): IArg<ArgType.Sticker, true, false, EnumLike>;
    static restSticker(name?: string, desc?: string): IArg<ArgType.Sticker, true, true, EnumLike>;
    static optionalJson(name?: string, desc?: string): IArg<ArgType.Json, boolean, false, EnumLike>;
    static restJson(name?: string, desc?: string): IArg<ArgType.Json, true, true, EnumLike>;
    static requiredJson(name?: string, desc?: string): IArg<ArgType.Json, true, false, EnumLike>;
    static optionalNumber(name?: string, desc?: string): IArg<ArgType.Number, boolean, false, EnumLike>;
    static requiredNumber(name?: string, desc?: string): IArg<ArgType.Number, true, false, EnumLike>;
    static restNumber(name?: string, desc?: string): IArg<ArgType.Number, true, true, EnumLike>;
    static restUser(name?: string, desc?: string): IArg<ArgType.User, true, true, EnumLike>;
    static requiredUser(name?: string, desc?: string): IArg<ArgType.User, true, false, EnumLike>;
    static optionalUser(name?: string, desc?: string): IArg<ArgType.User, boolean, false, EnumLike>;
    static optionalMember(name?: string, desc?: string): IArg<ArgType.Member, boolean, false, EnumLike>;
    static restMember(name?: string, desc?: string): IArg<ArgType.Member, true, true, EnumLike>;
    static requiredMember(name?: string, desc?: string): IArg<ArgType.Member, true, false, EnumLike>;
    static optionalAutomodRule(name?: string, desc?: string): IArg<ArgType.AutomodRule, boolean, false, EnumLike>;
    static restAutomodRule(name?: string, desc?: string): IArg<ArgType.AutomodRule, true, true, EnumLike>;
    static requiredAutomodRule(name?: string, desc?: string): IArg<ArgType.AutomodRule, true, false, EnumLike>;
    static restTextChannel(name?: string, desc?: string): IArg<ArgType.TextChannel, true, true, EnumLike>;
    static optionalTextChannel(name?: string, desc?: string): IArg<ArgType.TextChannel, boolean, false, EnumLike>;
    static requiredTextChannel(name?: string, desc?: string): IArg<ArgType.TextChannel, true, false, EnumLike>;
    static restGuildEmoji(name?: string, desc?: string): IArg<ArgType.GuildEmoji, true, true, EnumLike>;
    static optionalGuildEmoji(name?: string, desc?: string): IArg<ArgType.GuildEmoji, boolean, false, EnumLike>;
    static requiredGuildEmoji(name?: string, desc?: string): IArg<ArgType.GuildEmoji, true, false, EnumLike>;
    static restApplicationEmoji(name?: string, desc?: string): IArg<ArgType.ApplicationEmoji, true, true, EnumLike>;
    static optionalApplicationEmoji(name?: string, desc?: string): IArg<ArgType.ApplicationEmoji, boolean, false, EnumLike>;
    static requiredApplicationEmoji(name?: string, desc?: string): IArg<ArgType.ApplicationEmoji, true, false, EnumLike>;
    static restEmoji(name?: string, desc?: string): IArg<ArgType.Emoji, true, true, EnumLike>;
    static optionalEmoji(name?: string, desc?: string): IArg<ArgType.Emoji, boolean, false, EnumLike>;
    static requiredEmoji(name?: string, desc?: string): IArg<ArgType.Emoji, true, false, EnumLike>;
    static restDefaultReactionEmoji(name?: string, desc?: string): IArg<ArgType.DefaultReactionEmoji, true, true, EnumLike>;
    static optionalDefaultReactionEmoji(name?: string, desc?: string): IArg<ArgType.DefaultReactionEmoji, boolean, false, EnumLike>;
    static requiredDefaultReactionEmoji(name?: string, desc?: string): IArg<ArgType.DefaultReactionEmoji, true, false, EnumLike>;
    static restAttachment(name?: string, desc?: string): IArg<ArgType.Attachment, true, true, EnumLike>;
    static optionalAttachment(name?: string, desc?: string): IArg<ArgType.Attachment, boolean, false, EnumLike>;
    static requiredAttachment(name?: string, desc?: string): IArg<ArgType.Attachment, true, false, EnumLike>;
    static optionalBigInt(name?: string, desc?: string): IArg<ArgType.BigInt, boolean, false, EnumLike>;
    static requiredBigInt(name?: string, desc?: string): IArg<ArgType.BigInt, true, false, EnumLike>;
    static restBigInt(name?: string, desc?: string): IArg<ArgType.BigInt, true, true, EnumLike>;
    static optionalURL(name?: string, desc?: string): IArg<ArgType.URL, boolean, false, EnumLike>;
    static requiredURL(name?: string, desc?: string): IArg<ArgType.URL, true, false, EnumLike>;
    static restURL(name?: string, desc?: string): IArg<ArgType.URL, true, true, EnumLike>;
    static optionalBoolean(name?: string, desc?: string): IArg<ArgType.Boolean, boolean, false, EnumLike>;
    static restBoolean(name?: string, desc?: string): IArg<ArgType.Boolean, true, true, EnumLike>;
    static requiredBoolean(name?: string, desc?: string): IArg<ArgType.Boolean, true, false, EnumLike>;
    static requiredInvite(name?: string, desc?: string): IArg<ArgType.Invite, true, false, EnumLike>;
    static optionalInvite(name?: string, desc?: string): IArg<ArgType.Invite, boolean, false, EnumLike>;
    static restInvite(name?: string, desc?: string): IArg<ArgType.Invite, true, true, EnumLike>;
    static restWebhook(name?: string, desc?: string): IArg<ArgType.Webhook, true, true, EnumLike>;
    static requiredWebhook(name?: string, desc?: string): IArg<ArgType.Webhook, true, false, EnumLike>;
    static optionalWebhook(name?: string, desc?: string): IArg<ArgType.Webhook, boolean, false, EnumLike>;
    static optionalReaction(name?: string, desc?: string): IArg<ArgType.Reaction, boolean, false, EnumLike>;
    static requiredReaction(name?: string, desc?: string): IArg<ArgType.Reaction, true, false, EnumLike>;
    static restReaction(name?: string, desc?: string): IArg<ArgType.Reaction, true, true, EnumLike>;
    static restTime(name?: string, desc?: string): IArg<ArgType.Time, true, true, EnumLike>;
    static optionalTime(name?: string, desc?: string): IArg<ArgType.Time, boolean, false, EnumLike>;
    static requiredTime(name?: string, desc?: string): IArg<ArgType.Time, true, false, EnumLike>;
    static requiredDate(name?: string, desc?: string): IArg<ArgType.Date, true, false, EnumLike>;
    static optionalDate(name?: string, desc?: string): IArg<ArgType.Date, boolean, false, EnumLike>;
    static restDate(name?: string, desc?: string): IArg<ArgType.Date, true, true, EnumLike>;
    static restPermission(name?: string, desc?: string): IArg<ArgType.Permission, true, true, EnumLike>;
    static optionalPermission(name?: string, desc?: string): IArg<ArgType.Permission, boolean, false, EnumLike>;
    static requiredPermission(name?: string, desc?: string): IArg<ArgType.Permission, true, false, EnumLike>;
    static requiredOverwritePermission(name?: string, desc?: string): IArg<ArgType.OverwritePermission, true, false, EnumLike>;
    static restOverwritePermission(name?: string, desc?: string): IArg<ArgType.OverwritePermission, true, true, EnumLike>;
    static optionalOverwritePermission(name?: string, desc?: string): IArg<ArgType.OverwritePermission, boolean, false, EnumLike>;
    static optionalRoleOrUser(name?: string, desc?: string): IArg<ArgType.RoleOrUser, boolean, false, EnumLike>;
    static restRoleOrUser(name?: string, desc?: string): IArg<ArgType.RoleOrUser, true, true, EnumLike>;
    static requiredRoleOrUser(name?: string, desc?: string): IArg<ArgType.RoleOrUser, true, false, EnumLike>;
    private static create;
}
//# sourceMappingURL=Arg.d.ts.map