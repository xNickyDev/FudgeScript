"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BigIntFormatRegex = void 0;
const lodash_1 = require("lodash");
const structures_1 = require("../../structures");
exports.BigIntFormatRegex = /^\d+n$/;
exports.default = new structures_1.NativeFunction({
    name: "$typeof",
    description: "Returns the type of the provided argument",
    unwrap: true,
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
    execute(ctx, [arg]) {
        let type;
        if ((0, lodash_1.isBoolean)(arg))
            type = "boolean";
        else if (exports.BigIntFormatRegex.test(arg))
            type = "bigint";
        else if ((0, lodash_1.isNumber)(arg))
            type = "number";
        else if ((0, lodash_1.isObject)(arg))
            type = "object";
        else
            type = "string";
        return this.success(type);
    },
});
//# sourceMappingURL=typeof.js.map