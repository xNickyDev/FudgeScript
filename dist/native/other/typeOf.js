"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BigIntFormatRegex = void 0;
const structures_1 = require("../../structures");
exports.BigIntFormatRegex = /^\d+n$/;
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
        const arg = this.displayField(0);
        if (!!arg && !isNaN(Number(arg)))
            return this.success("number");
        if (arg === "true" || arg === "false")
            return this.success("boolean");
        if (exports.BigIntFormatRegex.test(arg))
            return this.success("bigint");
        try {
            void JSON.parse(arg);
            return this.success("object");
        }
        catch (error) {
            return this.success("string");
        }
    },
});
//# sourceMappingURL=typeOf.js.map