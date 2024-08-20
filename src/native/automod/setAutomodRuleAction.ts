import { BaseChannel, AutoModerationActionType, GuildTextChannelResolvable } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$setAutomodRuleAction",
    version: "1.5.0",
    description: "Sets a new automod rule action",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild of the automod rule",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "rule ID",
            description: "The ID of the automod rule",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "type",
            description: "The type of the automod rule action",
            rest: false,
            required: true,
            type: ArgType.Enum,
            enum: AutoModerationActionType
        },
        {
            name: "channel ID",
            description: "The channel to which content will be logged",
            rest: false,
            required: false,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isTextBased(),
        },
        {
            name: "duration",
            description: "The timeout duration in seconds",
            rest: false,
            required: false,
            type: ArgType.Number,
        },
        {
            name: "message",
            description: "The custom message that is shown whenever a message is blocked",
            rest: false,
            required: false,
            type: ArgType.String,
        },
    ],
    async execute(ctx, [ guild, id, type, channel, duration, message ]) {
        const rule = await guild.autoModerationRules.fetch(id).catch(ctx.noop)
        const action = { 
            type: type,
            metadata: {
                channel: channel as GuildTextChannelResolvable,
                customMessage: message,
                durationSeconds: duration
            }
        }

        await rule?.edit({
            actions: [...rule?.actions, action],
        })

        return this.success()
    },
})