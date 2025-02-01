import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$entitlementSkuID",
    version: "1.5.0",
    description: "Returns this entitlement's sku id",
    output: ArgType.String,
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
        return this.success((ent ?? ctx.entitlement)?.skuId)
    },
})