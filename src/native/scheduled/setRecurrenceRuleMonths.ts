import { GuildScheduledEventRecurrenceRuleFrequency, GuildScheduledEventRecurrenceRuleMonth } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$setRecurrenceRuleMonths",
    version: "2.3.0",
    description: "Sets the yearly months for the current recurrence rule",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "months",
            description: "The months to recur on",
            rest: true,
            required: true,
            type: ArgType.Enum,
            enum: GuildScheduledEventRecurrenceRuleMonth
        },
    ],
    execute(ctx, [months]) {
        const rule = ctx.scheduledEvent.recurrenceRule
        if (rule?.frequency === GuildScheduledEventRecurrenceRuleFrequency.Yearly) {
            ctx.scheduledEvent.recurrenceRule = {
                ...rule,
                byMonth: months
            }
        }
        return this.success()
    },
})