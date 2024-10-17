import { GuildExplicitContentFilter } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$setGuildExplicitContentFilter",
    version: "1.5.0",
    description: "Sets the explicit content filter for a guild, returns bool",
    unwrap: true,
    aliases: [
        "$setServerExplicitContentFilter"
    ],
    output: ArgType.Boolean,
    args: [
        {
            name: "guild ID",
            description: "The guild to set explicit content filter for",
            rest: false,
            type: ArgType.Guild,
            required: true,
        },
        {
            name: "filter",
            description: "The new explicit content filter",
            rest: false,
            type: ArgType.Enum,
            enum: GuildExplicitContentFilter
        },
    ],
    brackets: true,
    async execute(ctx, [guild, filter]) {
        return this.success((await guild.setExplicitContentFilter(filter || null).catch(() => false)) !== false)
    },
})