"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setGuildSystemChannel",
    version: "1.5.0",
    description: "Sets the system channel for a guild, returns bool",
    unwrap: true,
    aliases: [
        "$setServerSystemChannel"
    ],
    output: structures_1.ArgType.Boolean,
    args: [
        {
            name: "guild ID",
            description: "The guild to set system channel for",
            rest: false,
            type: structures_1.ArgType.Guild,
            required: true,
        },
        {
            name: "channel ID",
            description: "The new system channel",
            rest: false,
            type: structures_1.ArgType.Channel,
            check: (i) => i.type === discord_js_1.ChannelType.GuildText,
            pointer: 0
        },
    ],
    brackets: true,
    async execute(ctx, [guild, channel]) {
        return this.success((await guild.setSystemChannel(channel || null).catch(() => false)) !== false);
    },
});
//# sourceMappingURL=setGuildSystemChannel.js.map