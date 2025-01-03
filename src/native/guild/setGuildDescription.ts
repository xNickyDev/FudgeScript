import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$setGuildDescription",
    version: "2.1.0",
    description: "Sets a guild description, returns boolean",
    unwrap: true,
    aliases: [
        "$setServerDescription"
    ],
    output: ArgType.Boolean,
    args: [
        {
            name: "guild ID",
            rest: false,
            type: ArgType.Guild,
            required: true,
            description: "The guild to set description for",
        },
        {
            name: "description",
            description: "The new description",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "reason",
            description: "The reason for this action",
            rest: false,
            type: ArgType.String,
        },
    ],
    brackets: true,
    async execute(ctx, [guild, desc, reason]) {
        return this.success((await guild.edit({
            description: desc,
            reason: reason || undefined
        }).catch(() => false)) !== false)
    },
})
