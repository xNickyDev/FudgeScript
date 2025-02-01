import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
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
            type: ArgType.Entitlement
        }
    ],
    output: ArgType.Boolean,
    async execute(ctx, [ ent ]) {
        return this.success(
            ctx.interaction?.entitlements.get(ent.id)?.consume().then(() => true).catch(ctx.noop) ?? false
        )
    },
})