"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$followChannel",
    version: "1.5.0",
    description: "Follows given announcement channel, returns bool",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to follow",
            type: structures_1.ArgType.Channel,
            rest: false,
            required: true,
            check: (i) => i.type === discord_js_1.ChannelType.GuildAnnouncement,
        },
        {
            name: "channel ID",
            description: "The channel to crosspost messages in",
            type: structures_1.ArgType.Channel,
            rest: false,
            required: true,
            check: (i) => i.type === discord_js_1.ChannelType.GuildText,
        },
        {
            name: "reason",
            description: "The reason for following the channel",
            type: structures_1.ArgType.String,
            rest: false,
        }
    ],
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [news, chan, reason]) {
        return this.success(!!(await news.addFollower(chan, reason || undefined)));
    },
});
//# sourceMappingURL=followChannel.js.map