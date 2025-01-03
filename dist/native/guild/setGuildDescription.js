"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setGuildDescription",
    description: "Sets a guild description, returns boolean",
    unwrap: true,
    aliases: [
        "$setServerDescription"
    ],
    output: structures_1.ArgType.Boolean,
    args: [
        {
            name: "guild ID",
            rest: false,
            type: structures_1.ArgType.Guild,
            required: true,
            description: "The guild to set description for",
        },
        {
            name: "description",
            description: "The new description",
            rest: false,
            type: structures_1.ArgType.String,
        },
        {
            name: "reason",
            description: "The reason for this action",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    brackets: true,
    async execute(ctx, [guild, desc, reason]) {
        return this.success((await guild.edit({
            description: desc,
            reason: reason || undefined
        }).catch(() => false)) !== false);
    },
});
//# sourceMappingURL=setGuildDescription.js.map