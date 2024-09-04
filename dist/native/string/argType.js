"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$argType",
    version: "1.5.0",
    description: "Returns the type of the specified argument",
    unwrap: true,
    brackets: true,
    output: structures_1.ArgType,
    args: [
        {
            name: "arg",
            description: "The argument to get type of",
            required: true,
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    execute(ctx, [arg]) {
        return this.success();
    },
});
//# sourceMappingURL=argType.js.map