"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$isCommand",
    version: "1.0.6",
    description: "Returns whether the interaction is a command",
    unwrap: false,
    output: structures_1.ArgType.Boolean,
    execute(ctx) {
        return this.success(Boolean(ctx.isCommand()));
    },
});
//# sourceMappingURL=isCommand.js.map