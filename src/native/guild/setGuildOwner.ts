import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$setGuildOwner",
    version: "1.5.0",
    description: "Sets the owner of a guild, returns bool",
    unwrap: true,
    aliases: [
        "$setServerOwner"
    ],
    output: ArgType.Boolean,
    args: [
        {
            name: "guild ID",
            description: "The guild to set owner on",
            rest: false,
            type: ArgType.Guild,
            required: true,
        },
        {
            name: "user ID",
            description: "The new owner",
            rest: false,
            required: true,
            type: ArgType.Member,
            pointer: 0
        },
    ],
    brackets: true,
    async execute(ctx, [guild, member]) {
        return this.success((await guild.setOwner(member).catch(() => false)) !== false)
    },
})