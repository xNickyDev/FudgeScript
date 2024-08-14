"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$userCustomStatus",
    version: "1.5.0",
    aliases: ["$customStatus"],
    description: "Returns the custom status of a user",
    unwrap: true,
    output: structures_1.ArgType.String,
    args: [
        {
            name: "user ID",
            description: "The user to return its custom status",
            required: true,
            rest: false,
            type: structures_1.ArgType.User,
        },
        {
            name: "guild ID",
            description: "The guild to pull the user from",
            rest: false,
            type: structures_1.ArgType.Guild,
        },
    ],
    brackets: false,
    async execute(ctx, [user, guildId]) {
        return this.success();
    },
});
//# sourceMappingURL=userCustomStatus.js.map