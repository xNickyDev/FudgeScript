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
    ],
    brackets: true,
    unwrap: true,
    execute(ctx, [keys]) {
        return this.successJSON(JSON.stringify(ctx.getEnvironmentKey(...keys)));
    },
});
//# sourceMappingURL=jsonStringify.js.map