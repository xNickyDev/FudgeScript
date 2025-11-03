"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$webhookToken",
    version: "1.0.0",
    description: "Returns the token of given webhook",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "webhook ID",
            description: "The webhook id",
            rest: false,
            type: structures_1.ArgType.Webhook,
            required: true,
        },
    ],
    output: structures_1.ArgType.String,
    execute(ctx, [web]) {
        return this.success(web.token);
    },
});
//# sourceMappingURL=webhookToken.js.map