"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NativeFunction_1 = require("../../structures/@internal/NativeFunction");
exports.default = new NativeFunction_1.NativeFunction({
    name: "$jsonStringify",
    version: "1.5.0",
    output: NativeFunction_1.ArgType.Json,
    description: "Returns the JSON in stringified format",
    args: [
        {
            name: "key",
            description: "The key to return its value",
            required: true,
            type: NativeFunction_1.ArgType.String,
            rest: true,
        },
        {
            name: "spaces",
            description: "The spaces to use for formatting",
            required: false,
            type: NativeFunction_1.ArgType.Number,
            rest: false
        }
    ],
    brackets: true,
    unwrap: true,
    execute(ctx, [args, spaces]) {
        return this.successJSON(JSON.stringify(ctx.getEnvironmentKey(...args)));
    },
});
//# sourceMappingURL=jsonStringify.js.map