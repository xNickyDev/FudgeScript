"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NativeFunction_1 = require("../../structures/@internal/NativeFunction");
exports.default = new NativeFunction_1.NativeFunction({
    name: "$suppressErrors",
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
        // not implemented
        const code = this.data.fields[0];
        return this.success();
    },
});
//# sourceMappingURL=suppressErrors.js.map