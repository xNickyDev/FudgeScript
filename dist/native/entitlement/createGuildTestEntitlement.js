"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$createGuildTestEntitlement",
    version: "2.2.0",
    description: "Creates a new guild test entitlement, returns entitlement id",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to create entitlement for",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild
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
    async execute(ctx, [guild, sku]) {
        const entitlement = await ctx.client.application.entitlements.createTest({
            guild: guild,
            sku: sku
        }).catch(ctx.noop);
        return this.success(entitlement ? entitlement.id : null);
    },
});
//# sourceMappingURL=createGuildTestEntitlement.js.map