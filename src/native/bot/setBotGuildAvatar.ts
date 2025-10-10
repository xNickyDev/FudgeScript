import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$setBotGuildAvatar",
    version: "2.6.0",
    description: "Sets the avatar of the bot on a guild",
    brackets: true,
    unwrap: true,
    aliases: [
        "$setClientGuildAvatar"
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
            name: "url",
            description: "The avatar url, leave empty to clear",
            rest: false,
            type: ArgType.String,
        },
    ],
    output: ArgType.Boolean,
    async execute(ctx, [guild, url]) {
        return this.success(!!(await guild.members.editMe({ avatar: url }).catch(ctx.noop)))
    },
})