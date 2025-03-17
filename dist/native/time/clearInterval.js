"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$clearInterval",
    description: "Clears an active interval",
    aliases: ["$stopInterval"],
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "name",
            description: "The name of the interval",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    execute(ctx, [name]) {
        clearInterval(ctx.client.intervals.get(name));
        ctx.client.intervals.delete(name);
        return this.success();
    },
});
//# sourceMappingURL=clearInterval.js.map