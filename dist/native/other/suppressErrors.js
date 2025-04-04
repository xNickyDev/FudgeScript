"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NativeFunction_1 = require("../../structures/@internal/NativeFunction");
exports.default = new NativeFunction_1.NativeFunction({
    name: "$suppressErrors",
    version: "2.3.0",
    description: "Suppresses all function errors for a command",
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
        // not implemented
        const code = this.data.fields[0];
        ctx.suppressErrors = true;
        return this.success();
    },
});
//# sourceMappingURL=suppressErrors.js.map