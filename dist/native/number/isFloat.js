"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$isFloat",
    version: "1.0.0",
    description: "Whether the number is a float",
    unwrap: true,
    output: structures_1.ArgType.Boolean,
    args: [
        {
            name: "number",
            description: "The number to check",
            required: true,
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    brackets: true,
    execute(ctx, [n]) {
        return this.success((0, lodash_1.isNumber)(Number(n)) ? Number(n) % 1 !== 0 : false);
    },
});
//# sourceMappingURL=isFloat.js.map