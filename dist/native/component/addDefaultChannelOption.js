"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$addDefaultChannelOption",
    version: "1.4.0",
    aliases: ["$addDefaultChannels"],
    description: "Adds a default channel option to the last select menu",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel id",
            rest: true,
            required: true,
            type: structures_1.ArgType.String
        }
    ],
    execute(ctx, [channels]) {
        const menu = ctx.container.components.at(-1);
        console.log("Type:", menu?.constructor.name);
        console.log(menu);
        if (menu && menu instanceof discord_js_1.ChannelSelectMenuBuilder) {
            menu.addDefaultChannels(channels);
            console.log("success");
        }
        return this.success();
    },
});
//# sourceMappingURL=addDefaultChannelOption.js.map