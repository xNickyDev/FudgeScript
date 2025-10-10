"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setBotGuildBio",
    description: "Sets the bio description of the bot on a guild",
    brackets: true,
    unwrap: true,
    aliases: [
        "$setClientGuildBio"
    ],
    args: [
        {
            name: "guild ID",
            description: "The guild to edit the bot on",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
        {
            name: "bio",
            description: "The description to set, leave empty to clear",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [guild, bio]) {
        return this.success(!!(await guild.members.editMe({ bio }).catch(ctx.noop)));
    },
});
//# sourceMappingURL=setBotGuildBio.js.map