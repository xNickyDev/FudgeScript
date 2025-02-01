"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$entitlementID",
    version: "1.5.0",
    description: "Returns the entitlement's id",
    output: structures_1.ArgType.Entitlement,
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "entitlement name",
            description: "The name of the entitlement",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        }
    ],
    execute(ctx, [name]) {
        return this.success(this.hasFields ? ctx.client.application.entitlements.cache.get(name)?.id : ctx.entitlement?.id);
    },
});
//# sourceMappingURL=entitlementID.js.map