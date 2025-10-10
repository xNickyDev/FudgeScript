import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$setBotGuildBio",
    version: "2.6.0",
    description: "Sets the bio description of the bot on a guild",
    brackets: true,
    unwrap: true,
    aliases: [
        "$setClientGuildBio"
    ],
    args: [
        {
            name: "guild ID",
            description: "The guild to edit the bot on",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "bio",
            description: "The description to set, leave empty to clear",
            rest: false,
            type: ArgType.String,
        },
    ],
    output: ArgType.Boolean,
    async execute(ctx, [guild, bio]) {
        return this.success(!!(await guild.members.editMe({ bio }).catch(ctx.noop)))
    },
})