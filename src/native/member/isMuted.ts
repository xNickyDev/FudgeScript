import { APIInteractionGuildMember } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$isMuted",
    version: "1.0.0",
    description: "Whether a member is muted",
    brackets: false,
    unwrap: true,
    aliases: [
        "$memberIsMuted"
    ],
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
    execute(ctx, [, member]) {
        member ??= ctx.member!
        return this.success(member?.voice.mute ?? ("mute" in (ctx.interaction?.member ?? {}) ? (ctx.interaction?.member as APIInteractionGuildMember).mute : false) ?? false)
    },
})