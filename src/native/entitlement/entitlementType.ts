import { EntitlementType } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$entitlementType",
    version: "1.5.0",
    description: "Returns this entitlement's type",
    output: EntitlementType,
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
        return this.success(EntitlementType[(ent ?? ctx.entitlement)?.type!])
    },
})