"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$deleteTestEntitlement",
    version: "2.2.0",
    description: "Deletes a test entitlement, returns bool",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "entitlement ID",
            description: "The entitlement to delete",
            rest: false,
            required: true,
            type: structures_1.ArgType.Entitlement
        }
    ],
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [ent]) {
        try {
            await ctx.client.application.entitlements.deleteTest(ent);
        }
        catch (error) {
            ctx.noop(error);
            return this.success(false);
        }
        return this.success(true);
    },
});
//# sourceMappingURL=deleteTestEntitlement.js.map