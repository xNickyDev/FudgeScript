import { GuildVerificationLevel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$setGuildVerificationLevel",
    version: "1.5.0",
    description: "Sets the verification level of a guild, returns bool",
    unwrap: true,
    aliases: [
        "$setServerVerificationLevel"
    ],
    output: ArgType.Boolean,
    args: [
        {
            name: "guild ID",
            description: "The guild to set verification level on",
            rest: false,
            type: ArgType.Guild,
            required: true,
        },
        {
            name: "level",
            description: "The new verification level",
            rest: false,
            type: ArgType.Enum,
            enum: GuildVerificationLevel
        },
    ],
    brackets: true,
    async execute(ctx, [guild, level]) {
        return this.success((await guild.setVerificationLevel(level || null).catch(() => false)) !== false)
    },
})