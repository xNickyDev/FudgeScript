import { ArgType, NativeFunction, Return } from "../../structures"
import { InviteProperties, InviteProperty } from "../../properties/invite"

export default new NativeFunction({
    name: "$getInviteInfo",
    version: "1.5.0",
    brackets: true,
    description: "Returns information about an invite",
    unwrap: true,
    output: ArgType.Boolean,
    args: [
        {
            name: "code",
            description: "The invite code",
            rest: false,
            required: true,
            type: ArgType.Invite,
        },
        {
            name: "property",
            rest: false,
            type: ArgType.Enum,
            description: "The property of the invite to return",
            enum: InviteProperty
        },
    ],
    async execute(ctx, [inv, prop]) {
        const invite = await ctx.client.fetchInvite(inv.code).catch(ctx.noop)
        return this.success(prop ? InviteProperties[prop](invite!) : invite)
    },
})