"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NativeFunction_1 = require("../../structures/@internal/NativeFunction");
exports.default = new NativeFunction_1.NativeFunction({
    name: "$httpGetHeader",
    version: "1.5.0",
    description: "Gets an HTTP header",
    unwrap: true,
    args: [
        {
            name: "name",
            description: "The header name",
            rest: false,
            type: NativeFunction_1.ArgType.String,
            required: true
        }
    ],
    brackets: true,
    execute(ctx, [name]) {
        console.log("HTTP Context:", ctx.http);
        console.log("Headers:", ctx.http?.headers);
        console.log("Header Keys:", Object.keys(ctx.http?.headers || {}));
        return this.success();
    },
});
//# sourceMappingURL=httpGetHeader.js.map