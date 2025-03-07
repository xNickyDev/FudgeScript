"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$memberAvatar",
    version: "1.0.0",
    description: "Returns the member avatar",
    brackets: false,
    output: structures_1.ArgType.URL,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull member from",
            rest: false,
            type: structures_1.ArgType.Guild,
            required: true,
        },
        {
            name: "user ID",
            description: "The user to retrieve the avatar",
            rest: false,
            required: true,
            pointer: 0,
            type: structures_1.ArgType.Member,
        },
        {
            name: "size",
            description: "The size to use for the image",
            rest: false,
            type: structures_1.ArgType.Number,
        },
        {
            name: "extension",
            description: "The extension to use for the image",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    unwrap: true,
    execute(ctx, [, user, size, ext]) {
        const member = user ?? ctx.member ?? ctx.interaction?.member;
        const hash = member.avatar ?? member.user.avatar;
        return this.success(member && hash
            ? new discord_js_1.CDN().avatar(member.user.id, hash, {
                extension: ext || undefined,
                size: size || 2048,
            })
            : member?.user.defaultAvatarURL);
    },
});
//# sourceMappingURL=memberAvatar.js.map