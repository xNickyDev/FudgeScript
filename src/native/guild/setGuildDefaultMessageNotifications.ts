import { GuildDefaultMessageNotifications } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$setGuildDefaultMessageNotifications",
    version: "1.5.0",
    description: "Sets the default message notifications setting for a guild, returns bool",
    unwrap: true,
    aliases: [
        "$setServerDefaultMessageNotifications"
    ],
    output: ArgType.Boolean,
    args: [
        {
            name: "guild ID",
            description: "The guild to set default message notifications for",
            rest: false,
            type: ArgType.Guild,
            required: true,
        },
        {
            name: "setting",
            description: "The new default message notifications setting",
            rest: false,
            type: ArgType.Enum,
            enum: GuildDefaultMessageNotifications
        },
    ],
    brackets: true,
    async execute(ctx, [guild, setting]) {
        return this.success((await guild.setDefaultMessageNotifications(setting || null).catch(() => false)) !== false)
    },
})