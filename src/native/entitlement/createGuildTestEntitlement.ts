import { SKUResolvable } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$createGuildTestEntitlement",
    version: "2.2.0",
    description: "Creates a new guild test entitlement, returns entitlement id",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to create entitlement for",
            rest: false,
            required: true,
            type: ArgType.Guild
        },
        {
            name: "sku ID",
            description: "The sku ID for the entitlement",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    output: ArgType.Entitlement,
    async execute(ctx, [ guild, sku ]) {
        const entitlement = await ctx.client.application.entitlements.createTest({
            guild: guild,
            sku: sku as SKUResolvable
        }).catch(ctx.noop)

        return this.success(entitlement ? entitlement.id : null)
    },
})