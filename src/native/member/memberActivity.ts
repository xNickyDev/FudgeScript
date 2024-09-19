import { ArgType, NativeFunction, Return } from "../../structures"
import array from "../../functions/array"

export default new NativeFunction({
    name: "$memberActivity",
    version: "1.5.0",
    description: "Returns the activity of a member",
    aliases: [
        "$userActivity",
        "$activity",
        "$memberActivities"
    ],
    unwrap: true,
    output: array<ArgType.String>(),
    args: [
        {
            name: "guild ID",
            description: "The guild to pull the member from",
            required: true,
            rest: false,
            type: ArgType.Guild,
        },
        {
            name: "user ID",
            description: "The member to return its activity",
            required: true,
            rest: false,
            type: ArgType.Member,
            pointer: 0,
        },
        {
            name: "separator",
            description: "The separator to use for every activity",
            rest: false,
            type: ArgType.String,
        },
    ],
    brackets: false,
    execute(ctx, [, member, sep]) {
        return this.success((member ?? ctx.member)?.presence?.activities.join(sep ?? ", "))
    }
})