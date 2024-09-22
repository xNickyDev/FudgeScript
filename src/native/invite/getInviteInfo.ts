import { ArgType, NativeFunction, Return } from "../../structures"
import { InviteProperties, InviteProperty } from "../../properties/invite"
import array from "../../functions/array"

export default new NativeFunction({
    name: "$getInviteInfo",
    version: "1.5.0",
    brackets: true,
    description: "Returns information about an invite",
    unwrap: true,
    output: array<ArgType.Invite>(),
    args: [
        {
            name: "code",
            description: "The invite code",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "property",
            rest: false,
            required: true,
            type: ArgType.Enum,
            description: "The property of the invite to return",
            enum: InviteProperty
        },
    ],
    async execute(ctx, [code, prop]) {
        const invite = await ctx.client.fetchInvite(code).catch(ctx.noop)
        return this.success(invite ? InviteProperties[prop](invite) : null)
    },
})