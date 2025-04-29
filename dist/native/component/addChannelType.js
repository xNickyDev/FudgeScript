"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$addChannelType",
    version: "1.4.0",
    aliases: ["$addChannelTypes"],
    description: "Adds channel types to the last select menu",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "types",
            description: "The channel types to add",
            rest: true,
            enum: discord_js_1.ChannelType,
            required: true,
            type: structures_1.ArgType.Enum
        }
    ],
    execute(ctx, [types]) {
        const comp = ctx.container.components.at(-1);
        if (comp instanceof discord_js_1.ActionRow && comp.components[0] instanceof discord_js_1.ChannelSelectMenuBuilder) {
            comp.components[0].addChannelTypes(types);
        }
        return this.success();
    },
});
//# sourceMappingURL=addChannelType.js.map