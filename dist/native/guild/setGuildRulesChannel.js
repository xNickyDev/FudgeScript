"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setGuildRulesChannel",
    version: "1.5.0",
    description: "Sets the rules channel for a guild, returns bool",
    unwrap: true,
    aliases: [
        "$setServerRulesChannel"
    ],
    output: structures_1.ArgType.Boolean,
    args: [
        {
            name: "guild ID",
            description: "The guild to set rules channel for",
            rest: false,
            type: structures_1.ArgType.Guild,
            required: true,
        },
        {
            name: "channel ID",
            description: "The new rules channel",
            rest: false,
            type: structures_1.ArgType.Channel,
            check: (i) => i.type === discord_js_1.ChannelType.GuildText,
            pointer: 0
        },
    ],
    brackets: true,
    async execute(ctx, [guild, channel]) {
        return this.success((await guild.setRulesChannel(channel || null).catch(() => false)) !== false);
    },
});
//# sourceMappingURL=setGuildRulesChannel.js.map