import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$setGuildAFKTimeout",
    version: "1.5.0",
    description: "Sets the AFK timeout for a guild, returns bool",
    unwrap: true,
    aliases: [
        "$setServerAFKTimeout"
    ],
    output: ArgType.Boolean,
    args: [
        {
            name: "guild ID",
            description: "The guild to set AFK timeout for",
            rest: false,
            type: ArgType.Guild,
            required: true,
        },
        {
            name: "seconds",
            description: "The new AFK timeout in seconds",
            rest: false,
            required: true,
            type: ArgType.Number,
        },
    ],
    brackets: true,
    async execute(ctx, [guild, seconds]) {
        return this.success((await guild.setAFKTimeout(seconds).catch(() => false)) !== false)
    },
})