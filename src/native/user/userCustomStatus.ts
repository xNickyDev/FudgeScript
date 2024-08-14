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
            name: "guild ID",
            description: "The guild to pull the user from",
            rest: false,
            type: ArgType.Guild,
        },
    ],
    brackets: false,
    async execute(ctx, [ user, guildId ]) {
        return this.success()
    },
})