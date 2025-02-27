"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$getUserCooldownTime",
    version: "1.5.0",
    description: "Retrieves current cooldown time in ms for given user id, binded to current command",
    brackets: true,
    output: structures_1.ArgType.Number,
    unwrap: true,
    args: [
        {
            name: "user ID",
            description: "The user id to get its cooldown",
            rest: false,
            type: structures_1.ArgType.String,
            required: true,
        },
    ],
    execute(ctx, [id]) {
        return this.success(ctx.client.cooldowns.getTimeLeft(ctx.client.cooldowns.identifier(ctx.cmd.id, "user", id)));
    },
});
//# sourceMappingURL=getUserCooldownTime.js.map