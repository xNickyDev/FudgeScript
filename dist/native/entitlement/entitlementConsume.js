"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$entitlementConsume",
    version: "1.5.0",
    description: "Consumes an entitlement from an interaction",
    unwrap: true,
    args: [
        {
            name: "entitlement ID",
            description: "The id of the entitlement to consume",
            rest: false,
            required: true,
            type: structures_1.ArgType.Entitlement
        }
    ],
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [ent]) {
        return this.success(ctx.interaction?.entitlements.get(ent.id)?.consume().then(() => true).catch(ctx.noop) ?? false);
    },
});
//# sourceMappingURL=entitlementConsume.js.map