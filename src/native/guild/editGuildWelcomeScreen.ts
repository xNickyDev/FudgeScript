import { isBoolean } from "lodash"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$editGuildWelcomeScreen",
    version: "2.1.0",
    description: "Edits the welcome screen of a guild, returns bool",
    unwrap: true,
    aliases: [
        "$editServerWelcomeScreen"
    ],
    output: ArgType.Boolean,
    args: [
        {
            name: "guild ID",
            description: "The guild to edit welcome screen on",
            rest: false,
            type: ArgType.Guild,
            required: true,
        },
        {
            name: "enabled",
            description: "Whether to enable the welcome screen",
            rest: false,
            type: ArgType.Boolean,
        },
        {
            name: "description",
            description: "The new description for the welcome screen",
            rest: false,
            type: ArgType.String,
        },
    ],
    brackets: true,
    async execute(ctx, [guild, enabled, desc]) {
        return this.success((await guild.editWelcomeScreen({
            description: desc ?? undefined,
            enabled: isBoolean(enabled) ? enabled : undefined,
            welcomeChannels: ctx.welcomeScreenChannels || undefined
        }).catch(() => false)) !== false)
    },
})