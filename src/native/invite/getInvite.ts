import { ArgType, NativeFunction, Return } from "../../structures"
import { InviteProperties, InviteProperty } from "../../properties/invite"

export default new NativeFunction({
    name: "$getInvite",
    version: "1.5.0",
    brackets: true,
    description: "Returns information about an invite",
    unwrap: true,
    output: ArgType.Unknown,
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
    async execute(ctx, [invite, prop]) {
        return this.successJSON(prop && invite ? InviteProperties[prop](invite) : invite)
    },
})