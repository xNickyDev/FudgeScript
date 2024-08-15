import { ActivityType } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$userCustomStatus",
    version: "1.5.0",
    aliases: ["$customStatus"],
    description: "Returns the custom status of a user",
    unwrap: true,
    output: ArgType.String,
    args: [
        {
            name: "user ID",
            description: "The user to return its custom status",
            required: true,
            rest: false,
            type: ArgType.User,
        },
        {
            name: "type",
            description: "The type of the status to fetch",
            rest: false,
            type: ArgType.Enum,
            enum: ["state", "emoji"],
            default: "state"
        },
        {
            name: "guild ID",
            description: "The guild to pull the user from",
            rest: false,
            type: ArgType.Guild,
        },
    ],
    brackets: false,
    async execute(ctx, [ user, type, g ]) {
        const id = g ?? ctx.guild?.id
        const guild = await ctx.client.guilds.fetch(id).catch(ctx.noop)
        const member = await ctx.guild?.members.fetch(user ?? ctx.user?.id).catch(ctx.noop)
        const status = member?.presence?.activities?.find(x => x.type === ActivityType.Custom)

        return this.success(status?.state || undefined)
    },
})