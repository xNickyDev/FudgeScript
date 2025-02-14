"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$webhookIsApplicationCreated",
    description: "Checks whether given webhook is application created",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "id",
            description: "The webhook id",
            rest: false,
            type: structures_1.ArgType.Webhook,
            required: true,
        },
    ],
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [web]) {
        return this.success(web.isApplicationCreated());
    },
});
//# sourceMappingURL=webhookIsApplicationCreated.js.map