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
        const header = ctx.http.headers;
        if (header) {
            return this.success(header[name]);
        }
        else {
            return this.success();
        }
    },
});
//# sourceMappingURL=httpGetHeader.js.map