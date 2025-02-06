"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NativeFunction_1 = require("../../structures/@internal/NativeFunction");
exports.default = new NativeFunction_1.NativeFunction({
    name: "$jsonHas",
    description: "Returns whether a key exists in a JSON object",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "variable",
            description: "The variable that holds json",
            required: true,
            type: NativeFunction_1.ArgType.String,
            rest: false
        },
        {
            name: "key",
            description: "The key to check for",
            type: NativeFunction_1.ArgType.String,
            required: true,
            rest: false
        }
    ],
    output: NativeFunction_1.ArgType.Boolean,
    execute(ctx, [env, key]) {
        return this.success(Object.hasOwn(ctx.getEnvironmentKey(env), key));
    }
});
//# sourceMappingURL=jsonHas.js.map