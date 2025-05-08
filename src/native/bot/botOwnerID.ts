import { User } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"
import array from "../../functions/array"
import { TeamMemberProperties, TeamMemberProperty } from "../../properties/teamMember"

export default new NativeFunction({
    name: "$botOwnerID",
    version: "1.0.0",
    description: "Returns the bot's owner id or team members",
    brackets: false,
    aliases: [
        "$clientOwnerID",
        "$botTeamMembers",
        "$clientTeamMembers"
    ],
    args: [
        {
            name: "return members",
            description: "Whether to return all members",
            rest: false,
            required: false,
            type: ArgType.Boolean
        },
        {
            name: "separator",
            description: "The separator to use for every member",
            rest: false,
            type: ArgType.String
        },
        {
            name: "property",
            description: "The property of each team member to return",
            rest: false,
            type: ArgType.Enum,
            enum: TeamMemberProperty
        }
    ],
    output: [
        array<ArgType.User>(),
        ArgType.Unknown
    ],
    unwrap: true,
    async execute(ctx, [ returnAll, sep, prop ]) {
        if (!ctx.client.application.owner) await ctx.client.application.fetch().catch(ctx.noop)
        const owner = ctx.client.application.owner
        return this.success(owner ? owner instanceof User ? owner.id : returnAll ? owner.members.map(x => TeamMemberProperties[prop || TeamMemberProperty.id](x)).join(sep || ", ") : owner.ownerId : null)
    },
})