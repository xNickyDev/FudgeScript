import array from "../../functions/array"
import noop from "../../functions/noop"
import { InviteProperties, InviteProperty } from "../../properties/invite"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$guildInvites",
    version: "1.5.0",
    description: "Returns all invites of a guild",
    aliases: [
        "$serverInvites"
    ],
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "guild ID",
            rest: false,
            required: true,
            type: ArgType.Guild,
            description: "The guild to pull invites from"
        },
        {
            name: "property",
            rest: false,
            required: true,
            type: ArgType.Enum,
            description: "The property of the invites to return",
            enum: InviteProperty
        },
        {
            name: "separator",
            rest: false,
            type: ArgType.String,
            description: "The separator to use for each property"
        }
    ],
    output: array<ArgType.String>(),
    async execute(ctx, [ guild, prop, sep ]) {
        const invites = await (guild ?? ctx.guild).invites.fetch().catch(ctx.noop)
        return this.successJSON(invites?.map(invite => InviteProperties[prop](invite)).join(sep ?? ", "))
    },
})