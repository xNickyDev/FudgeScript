"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$createUserTestEntitlement",
    version: "2.2.0",
    description: "Creates a new user test entitlement, returns entitlement id",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "user ID",
            description: "The user to create entitlement for",
            rest: false,
            required: true,
            type: structures_1.ArgType.User
        },
        {
            name: "sku ID",
            description: "The sku ID for the entitlement",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        }
    ],
    output: structures_1.ArgType.Entitlement,
    async execute(ctx, [user, sku]) {
        const entitlement = await ctx.client.application.entitlements.createTest({
            user: user,
            sku: sku
        }).catch(ctx.noop);
        return this.success(entitlement ? entitlement.id : null);
    },
});
//# sourceMappingURL=createUserTestEntitlement.js.map