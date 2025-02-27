import { ArgType, NativeFunction, Return } from "../../structures"

export enum PresenceStatus {
    online = "online",
    idle = "idle",
    dnd = "dnd",
    offline = "offline"
}

export default new NativeFunction({
    name: "$guildMemberCount",
    version: "1.0.0",
    description: "Returns the user count of a guild",
    brackets: false,
    aliases: [
        "$serverMemberCount",
        "$serverMembersCount"
    ],
    output: ArgType.Number,
    args: [
        {
            name: "guild ID",
            description: "The guild to retrieve member count from",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "presence",
            description: "The presence of the users to count",
            rest: false,
            type: ArgType.Enum,
            enum: PresenceStatus
        },
        {
            name: "count bots",
            description: "Whether to count bots",
            rest: false,
            type: ArgType.Boolean,
        },
    ],
    unwrap: true,
    execute(ctx, [guild, presence, bots]) {
        guild ??= ctx.guild!
        bots ??= true

        if (presence) {
            return this.success(guild?.members.cache.filter(member => {
                const status = member.presence?.status
                return (presence === PresenceStatus.offline ? status === "offline" || !status : status === presence) && (bots || !member.user.bot)
            }).size)
        }

        return this.success(bots ? guild?.memberCount : guild?.members.cache.filter(member => !member.user.bot).size)
    },
})