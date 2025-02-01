import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$entitlementIsUserSubscription",
    version: "1.5.0",
    description: "Returns whether this entitlement is for a user",
    output: ArgType.Boolean,
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "entitlement ID",
            description: "The id of the entitlement",
            rest: false,
            required: true,
            type: ArgType.Entitlement
        }
    ],
    execute(ctx, [ent]) {
        return this.success((ent ?? ctx.entitlement)?.isUserSubscription())
    },
})