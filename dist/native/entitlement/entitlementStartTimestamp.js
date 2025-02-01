"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$entitlementStartTimestamp",
    version: "1.5.0",
    description: "Returns the time at which this entitlement starts",
    output: structures_1.ArgType.Time,
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "entitlement ID",
            description: "The id of the entitlement",
            rest: false,
            required: true,
            type: structures_1.ArgType.Entitlement
        }
    ],
    execute(ctx, [ent]) {
        return this.success((ent ?? ctx.entitlement)?.startsTimestamp);
    },
});
//# sourceMappingURL=entitlementStartTimestamp.js.map