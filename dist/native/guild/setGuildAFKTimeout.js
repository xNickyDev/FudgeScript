"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setGuildAFKTimeout",
    description: "Sets the AFK timeout for a guild, returns bool",
    unwrap: true,
    aliases: [
        "$setServerAFKTimeout"
    ],
    output: structures_1.ArgType.Boolean,
    args: [
        {
            name: "guild ID",
            description: "The guild to set AFK timeout for",
            rest: false,
            type: structures_1.ArgType.Guild,
            required: true,
        },
        {
            name: "seconds",
            description: "The new AFK timeout in seconds",
            rest: false,
            required: true,
            type: structures_1.ArgType.Number,
        },
    ],
    brackets: true,
    async execute(ctx, [guild, seconds]) {
        return this.success((await guild.setAFKTimeout(seconds).catch(() => false)) !== false);
    },
});
//# sourceMappingURL=setGuildAFKTimeout.js.map