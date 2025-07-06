"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NativeFunction_1 = require("../../structures/@internal/NativeFunction");
exports.default = new NativeFunction_1.NativeFunction({
    name: "$suppressErrors",
    version: "2.4.0",
    description: "Suppresses all forge errors for a command",
    unwrap: false,
    brackets: false,
    args: [
        {
            name: "code",
            description: "The code to execute in case of error",
            rest: false,
            required: true,
            type: NativeFunction_1.ArgType.String,
        },
    ],
    execute(ctx) {
        ctx.runtime.suppressErrors = true;
        return this.success();
    },
});
//# sourceMappingURL=suppressErrors.js.map