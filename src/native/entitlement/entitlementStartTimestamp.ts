import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$entitlementStartTimestamp",
    version: "1.5.0",
    description: "Returns the time at which this entitlement starts",
    output: ArgType.Time,
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
        return this.success((ent ?? ctx.entitlement)?.startsTimestamp)
    },
})