"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$forward",
    version: "2.2.0",
    description: "Forwards a message to another channel, returns bool",
    aliases: ["$forwardMessage"],
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to forward message to",
            rest: false,
            required: true,
            type: structures_1.ArgType.Channel,
            check: (i) => i.isTextBased() && i.type !== discord_js_1.ChannelType.GroupDM,
        },
        {
            name: "message ID",
            description: "The message to forward",
            rest: false,
            required: true,
            type: structures_1.ArgType.Message,
        },
    ],
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [channel, message]) {
        return this.success(!!(await message.forward(channel).catch(ctx.noop)));
    },
});
//# sourceMappingURL=forward.js.map