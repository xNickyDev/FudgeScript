"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const math_1 = require("../math/math");
exports.default = new structures_1.NativeFunction({
    name: "$isValidMath",
    description: "Checks whether given math expression is valid",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "expr",
            description: "The math expression to check for",
            rest: false,
            type: structures_1.ArgType.String,
            required: true,
        },
    ],
    output: structures_1.ArgType.Boolean,
    execute(ctx, [expr]) {
        return this.success(math_1.MathRegex.test(expr));
    },
});
//# sourceMappingURL=isValidMath.js.map