import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$isVerified",
    version: "1.0.0",
    aliases: [
        "$memberIsVerified"
    ],
    description: "Whether a member is verified",
    brackets: false,
    unwrap: true,
    output: ArgType.Boolean,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull the member from",
            rest: false,
            type: ArgType.Guild,
            required: true,
        },
        {
            name: "user ID",
            description: "The member to get its voice state",
            rest: false,
            type: ArgType.Member,
            pointer: 0,
            required: true,
        },
    ],
    execute(ctx, [, user]) {
        const member = user ?? ctx.member ?? ctx.interaction?.member
        return this.success(member && !member.pending)
    },
})