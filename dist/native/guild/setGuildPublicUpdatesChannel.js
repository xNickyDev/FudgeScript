"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setGuildPublicUpdatesChannel",
    description: "Sets the public updates channel for a guild, returns bool",
    unwrap: true,
    aliases: [
        "$setServerPublicUpdatesChannel"
    ],
    output: structures_1.ArgType.Boolean,
    args: [
        {
            name: "guild ID",
            description: "The guild to set public updates channel for",
            rest: false,
            type: structures_1.ArgType.Guild,
            required: true,
        },
        {
            name: "channel ID",
            description: "The new public updates channel",
            rest: false,
            type: structures_1.ArgType.Channel,
            check: (i) => i.type === discord_js_1.ChannelType.GuildText,
            pointer: 0
        },
    ],
    brackets: true,
    async execute(ctx, [guild, channel]) {
        return this.success((await guild.setPublicUpdatesChannel(channel || null).catch(() => false)) !== false);
    },
});
//# sourceMappingURL=setGuildPublicUpdatesChannel.js.map