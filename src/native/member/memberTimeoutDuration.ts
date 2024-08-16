import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$memberTimeoutDuration",
    version: "1.5.0",
    aliases: [
        "$timeoutDuration",
        "$getTimeoutDuration"
    ],
    description: "Returns the left timeout duration of a member",
    unwrap: true,
    brackets: false,
    output: ArgType.Time,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull member from",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "user ID",
            description: "The member to check for timeout",
            rest: false,
            type: ArgType.Member,
            pointer: 0,
            required: true,
        },
    ],
    execute(ctx, [, member]) {
        member ??= ctx.member!
        return this.success(member?.communicationDisabledUntil?.getTime())
    },
})
