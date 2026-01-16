"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$isArray",
    description: "Checks whether given array is valid",
    aliases: ["$isValidArray"],
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "array",
            description: "The array to check for",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        }
    ],
    output: structures_1.ArgType.Boolean,
    execute(ctx, [arr]) {
        return this.success(Array.isArray(arr));
    },
});
//# sourceMappingURL=isArray.js.map