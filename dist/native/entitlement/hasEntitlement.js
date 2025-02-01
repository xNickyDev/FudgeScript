"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$hasEntitlement",
    version: "1.5.0",
    aliases: [
        "$interactionHasEntitlement"
    ],
    description: "Checks whether this interaction user has given entitlement",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "entitlement ID",
            description: "The id of the entitlement to validate",
            rest: false,
            required: true,
            type: structures_1.ArgType.Entitlement
        }
    ],
    output: structures_1.ArgType.Boolean,
    execute(ctx, [ent]) {
        return this.success(ctx.interaction?.entitlements.has(ent.id));
    },
});
//# sourceMappingURL=hasEntitlement.js.map