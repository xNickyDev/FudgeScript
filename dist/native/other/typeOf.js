"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$typeOf",
    version: "2.3.0",
    description: "Returns the type of the provided argument",
    unwrap: false,
    brackets: true,
    args: [
        {
            name: "argument",
            rest: false,
            description: "The argument to get its type",
            type: structures_1.ArgType.String,
            required: true,
        },
    ],
    output: structures_1.ArgType.String,
    execute(ctx) {
        return this.success();
    },
});
//# sourceMappingURL=typeOf.js.map