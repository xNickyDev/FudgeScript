"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$webhookURL",
    version: "1.0.0",
    description: "Returns the url of given webhook",
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
    output: structures_1.ArgType.URL,
    execute(ctx, [web]) {
        return this.success(web.url);
    },
});
//# sourceMappingURL=webhookURL.js.map