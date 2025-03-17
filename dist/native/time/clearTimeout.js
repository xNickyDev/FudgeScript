"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$clearTimeout",
    description: "Clears an active timeout",
    aliases: ["$stopTimeout"],
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "name",
            description: "The name of the timeout",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    execute(ctx, [name]) {
        clearTimeout(ctx.client.timeouts.get(name));
        ctx.client.timeouts.delete(name);
        return this.success();
    },
});
//# sourceMappingURL=clearTimeout.js.map