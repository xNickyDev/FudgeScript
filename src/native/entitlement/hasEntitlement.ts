import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
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
            type: ArgType.Entitlement
        }
    ],
    output: ArgType.Boolean,
    execute(ctx, [ ent ]) {
        return this.success(ctx.interaction?.entitlements.has(ent.id))
    },
})