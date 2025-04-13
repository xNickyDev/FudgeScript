"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NativeFunction_1 = require("../../structures/@internal/NativeFunction");
exports.default = new NativeFunction_1.NativeFunction({
    name: "$httpTimeout",
    description: "Sets an HTTP request timeout, stops execution if request took longer than specified time",
    unwrap: false,
    brackets: true,
    args: [
        {
            name: "time",
            description: "The time to wait until the request times out",
            rest: false,
            type: NativeFunction_1.ArgType.Time,
            required: true,
        },
        {
            name: "code",
            description: "The code to execute if request timed out",
            rest: false,
            type: NativeFunction_1.ArgType.String,
        },
    ],
    async execute(ctx) {
        const code = this.data.fields[1];
        const time = await this["resolveUnhandledArg"](ctx, 0);
        if (!this["isValidReturnType"](time))
            return time;
        ctx.http.timeout = {
            time: time.value,
            code: code || undefined
        };
        return this.success();
    },
});
//# sourceMappingURL=httpTimeout.js.map