"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$userCustomStatus",
    version: "1.5.0",
    aliases: ["$customStatus"],
    description: "Returns the custom status of a user",
    unwrap: true,
    output: structures_1.ArgType.String,
    args: [
        {
            name: "user ID",
            description: "The user to return its custom status",
            required: true,
            rest: false,
            type: structures_1.ArgType.User,
        },
        {
            name: "type",
            description: "The type of the status to fetch",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: ["state", "emoji"],
            default: "state"
        },
        {
            name: "guild ID",
            description: "The guild to pull the user from",
            rest: false,
            type: structures_1.ArgType.Guild,
        },
    ],
    brackets: false,
    async execute(ctx, [user, type, g]) {
        const id = g ?? ctx.guild?.id;
        const guild = await ctx.client.guilds.fetch(id).catch(ctx.noop);
        const member = await ctx.guild?.members.fetch(user ?? ctx.user?.id).catch(ctx.noop);
        const status = member?.presence?.activities?.find(x => x.type === discord_js_1.ActivityType.Custom);
        return this.success(status?.state || undefined);
    },
});
//# sourceMappingURL=userCustomStatus.js.map