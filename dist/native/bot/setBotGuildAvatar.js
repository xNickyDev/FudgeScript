"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setBotGuildAvatar",
    version: "2.6.0",
    description: "Sets the avatar of the bot on a guild",
    brackets: true,
    unwrap: true,
    aliases: [
        "$setClientGuildAvatar"
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
            name: "url",
            description: "The avatar url, leave empty to clear",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [guild, url]) {
        return this.success(!!(await guild.members.editMe({ avatar: url }).catch(ctx.noop)));
    },
});
//# sourceMappingURL=setBotGuildAvatar.js.map