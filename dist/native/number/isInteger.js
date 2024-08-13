"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$isInteger",
    version: "1.0.0",
    description: "Whether the number is an integer",
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
        const num = typeof n === "number" ? n : parseFloat(n);
        if (isNaN(num) || typeof num !== "number") {
            return this.success(false);
        }
        return this.success(Number.isInteger(num) && Number(num.toFixed(0)) === num);
    },
});
//# sourceMappingURL=isInteger.js.map