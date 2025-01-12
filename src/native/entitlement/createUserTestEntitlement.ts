import { SKUResolvable } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$createUserTestEntitlement",
    version: "2.2.0",
    description: "Creates a new user test entitlement, returns entitlement id",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "user ID",
            description: "The user to create entitlement for",
            rest: false,
            required: true,
            type: ArgType.User
        },
        {
            name: "sku ID",
            description: "The sku ID for the entitlement",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    output: ArgType.String,
    async execute(ctx, [ user, sku ]) {
        const entitlement = await ctx.client.application.entitlements.createTest({
            user: user,
            sku: sku as SKUResolvable
        }).catch(ctx.noop)

        return this.success(entitlement ? entitlement.id : null)
    },
})