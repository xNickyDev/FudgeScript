import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$entitlementID",
    version: "1.5.0",
    description: "Returns the entitlement's id",
    output: ArgType.Entitlement,
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "entitlement name",
            description: "The name of the entitlement",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    execute(ctx, [name]) {
        return this.success(this.hasFields ? ctx.client.application.entitlements.cache.get(name)?.id : ctx.entitlement?.id)
    },
})