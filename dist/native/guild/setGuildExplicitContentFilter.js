"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setGuildExplicitContentFilter",
    description: "Sets the explicit content filter for a guild, returns bool",
    unwrap: true,
    aliases: [
        "$setServerExplicitContentFilter"
    ],
    output: structures_1.ArgType.Boolean,
    args: [
        {
            name: "guild ID",
            description: "The guild to set explicit content filter for",
            rest: false,
            type: structures_1.ArgType.Guild,
            required: true,
        },
        {
            name: "filter",
            description: "The new explicit content filter",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: discord_js_1.GuildExplicitContentFilter
        },
    ],
    brackets: true,
    async execute(ctx, [guild, filter]) {
        return this.success((await guild.setExplicitContentFilter(filter || null).catch(() => false)) !== false);
    },
});
//# sourceMappingURL=setGuildExplicitContentFilter.js.map