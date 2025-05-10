import { Team } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"
import { TeamMemberProperties, TeamMemberProperty } from "../../properties/teamMember"
import array from "../../functions/array"

export default new NativeFunction({
    name: "$botTeamMembers",
    version: "2.4.0",
    description: "Returns the client's team members",
    aliases: [
        "$clientTeamMembers"
    ],
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "property",
            description: "The property of each team member to return",
            rest: false,
            required: true,
            type: ArgType.Enum,
            enum: TeamMemberProperty
        },
        {
            name: "separator",
            description: "The separator to use for every property",
            rest: false,
            type: ArgType.String
        },
    ],
    output: [
        ArgType.Json,
        array<ArgType.Unknown>()
    ],
    async execute(ctx, [prop, sep]) {
        if (!ctx.client.application.owner) await ctx.client.application.fetch().catch(ctx.noop)
        const owner = ctx.client.application.owner
        const members = owner instanceof Team ? owner.members : null
        if (members && !this.hasFields) return this.successJSON(members)
        return this.success(prop ? members?.map(x => TeamMemberProperties[prop](x)).join(sep ?? ", ") : null)
    },
})