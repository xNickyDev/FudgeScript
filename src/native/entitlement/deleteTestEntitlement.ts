import { SKUResolvable } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$deleteTestEntitlement",
    version: "2.2.0",
    description: "Deletes a test entitlement, returns bool",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "entitlement ID",
            description: "The entitlement to delete",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    output: ArgType.Boolean,
    async execute(ctx, [ ent ]) {
        try {
            await ctx.client.application.entitlements.deleteTest(ent)
        } catch (error) {
            ctx.noop(error)
            return this.success(false)
        }
        
        return this.success(true)
    },
})