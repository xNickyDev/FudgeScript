"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NativeFunction_1 = require("../../structures/@internal/NativeFunction");
exports.default = new NativeFunction_1.NativeFunction({
    name: "$httpPing",
    version: "1.5.0",
    description: "Returns the execution time of the HTTP request",
    aliases: ["$httpExecutionTime"],
    unwrap: false,
    execute(ctx) {
        return this.success(ctx.http.response?.ping?.toFixed());
    },
});
//# sourceMappingURL=httpPing.js.map