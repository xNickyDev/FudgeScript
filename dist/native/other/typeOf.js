"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BigIntFormatRegex = void 0;
const structures_1 = require("../../structures");
exports.BigIntFormatRegex = /^\d+n$/;
exports.default = new structures_1.NativeFunction({
    name: "$typeOf",
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
        const arg = this.displayField(0);
        try {
            void JSON.parse(arg);
            return this.success("object");
        }
        catch (error) {
            return this.success(!!arg && !isNaN(Number(arg))
                ? "number"
                : (arg === "true" || arg === "false")
                    ? "boolean"
                    : exports.BigIntFormatRegex.test(arg)
                        ? "bigint"
                        : "string");
        }
    },
});
//# sourceMappingURL=typeOf.js.map