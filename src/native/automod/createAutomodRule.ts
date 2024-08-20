import { AutoModerationRuleTriggerType, AutoModerationRuleEventType } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$createAutomodRule",
    version: "1.5.0",
    description: "Creates a new automod rule, returns rule id",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to create automod rule on",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "name",
            description: "The name of the automod rule",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "trigger",
            description: "The trigger of the automod rule",
            rest: false,
            required: true,
            type: ArgType.Enum,
            enum: AutoModerationRuleTriggerType
        },
        {
            name: "event",
            description: "The event of the automod rule",
            rest: false,
            required: true,
            type: ArgType.Enum,
            enum: AutoModerationRuleEventType
        },
        {
            name: "enabled",
            description: "Whether the automod rule should be enabled",
            rest: false,
            required: false,
            type: ArgType.Boolean
        },
        {
            name: "reason",
            description: "The reason for creating the automod rule",
            rest: false,
            required: false,
            type: ArgType.String
        },
    ],
    output: ArgType.Number,
    async execute(ctx, [ guild, name, trigger, event, enabled, reason ]) {
        const rule = await guild.autoModerationRules.create({
            name: name,
            triggerType: trigger,
            eventType: event,
            enabled: enabled ?? true,
            reason: reason || undefined,
            actions: []
        }).catch(ctx.noop)

        return this.success(rule?.id)
    },
})