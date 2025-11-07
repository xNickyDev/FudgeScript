"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NativeFunction_1 = require("../../structures/@internal/NativeFunction");
exports.default = new NativeFunction_1.NativeFunction({
    name: "$jsonAssign",
    description: "Combines multiple JSON objects into a single JSON object",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "variable",
            description: "The variable that holds the target object",
            required: true,
            type: NativeFunction_1.ArgType.String,
            rest: false
        },
        {
            name: "objects",
            description: "The objects from which to copy properties",
            type: NativeFunction_1.ArgType.Json,
            required: true,
            rest: true
        }
    ],
    output: NativeFunction_1.ArgType.Json,
    execute(ctx, [name, objects]) {
        const json = ctx.getEnvironmentKey(name);
        if (!json)
            return this.success();
        return this.successJSON(Object.assign(json, ...objects));
    }
});
//# sourceMappingURL=jsonAssign.js.map