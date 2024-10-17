"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setWelcomeScreenChannel",
    version: "1.5.0",
    description: "Sets a new channel for the current welcome screen",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to link for this welcome channel",
            rest: false,
            required: true,
            type: structures_1.ArgType.Channel,
            check: (i) => i instanceof discord_js_1.TextChannel || i instanceof discord_js_1.NewsChannel || i instanceof discord_js_1.ForumChannel || i instanceof discord_js_1.MediaChannel,
            pointerProperty: "guild"
        },
        {
            name: "description",
            description: "The description to show for this welcome channel",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "emoji",
            description: "The emoji to display for this welcome channel",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    execute(ctx, [channel, desc, emoji]) {
        const data = {
            channel: channel,
            description: desc,
            emoji: emoji || undefined
        };
        ctx.welcomeScreenChannels ??= [];
        ctx.welcomeScreenChannels.push(data);
        return this.success();
    },
});
//# sourceMappingURL=setWelcomeScreenChannel.js.map