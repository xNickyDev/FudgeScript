"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NativeFunction_1 = require("../../structures/@internal/NativeFunction");
exports.default = new NativeFunction_1.NativeFunction({
    name: "$httpTimeout",
    version: "1.5.0",
    description: "Sets an HTTP request timeout, stops execution if request took longer than specified time",
    unwrap: false,
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
    brackets: true,
    async execute(ctx) {
        return this.stop();
    },
});
//# sourceMappingURL=httpTimeout.js.map