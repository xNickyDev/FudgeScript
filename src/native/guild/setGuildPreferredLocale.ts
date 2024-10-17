import { Locale } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$setGuildPreferredLocale",
    version: "1.5.0",
    description: "Sets the preferred locale of a guild, returns bool",
    unwrap: true,
    aliases: [
        "$setServerPreferredLocale"
    ],
    output: ArgType.Boolean,
    args: [
        {
            name: "guild ID",
            description: "The guild to set preferred locale on",
            rest: false,
            type: ArgType.Guild,
            required: true,
        },
        {
            name: "locale",
            description: "The new preferred locale",
            rest: false,
            type: ArgType.Enum,
            enum: Locale
        },
    ],
    brackets: true,
    async execute(ctx, [guild, locale]) {
        return this.success((await guild.setPreferredLocale(locale || null).catch(() => false)) !== false)
    },
})