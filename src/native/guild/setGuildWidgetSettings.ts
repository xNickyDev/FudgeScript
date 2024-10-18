import { BaseChannel, CategoryChannel, ForumChannel, GuildChannel, MediaChannel, NewsChannel, StageChannel, TextChannel, VoiceBasedChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"
import { isBoolean } from "lodash"

export default new NativeFunction({
    name: "$setGuildWidgetSettings",
    version: "1.5.0",
    description: "Sets the widget settings of a guild, returns bool",
    unwrap: true,
    aliases: [
        "$setServerWidgetSettings"
    ],
    output: ArgType.Boolean,
    args: [
        {
            name: "guild ID",
            description: "The guild to set widget settings on",
            rest: false,
            type: ArgType.Guild,
            required: true,
        },
        {
            name: "channel ID",
            description: "The invite channel for the widget",
            rest: false,
            type: ArgType.Channel,
            check: (i: BaseChannel) => (i instanceof GuildChannel && !(i instanceof StageChannel) && !(i instanceof CategoryChannel))
        },
        {
            name: "enabled",
            description: "Whether to enable the widget",
            rest: false,
            type: ArgType.Boolean,
        },
    ],
    brackets: true,
    async execute(ctx, [guild, channel, enabled]) {
        return this.success((await guild.setWidgetSettings({
            channel: channel as NewsChannel | TextChannel | ForumChannel | MediaChannel | VoiceBasedChannel || guild.widgetChannel,
            enabled: isBoolean(enabled) ? enabled : guild.widgetEnabled || false
        }).catch(() => false)) !== false)
    },
})