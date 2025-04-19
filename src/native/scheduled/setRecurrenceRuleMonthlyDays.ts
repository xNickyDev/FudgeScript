import { GuildScheduledEventRecurrenceRuleFrequency } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$setRecurrenceRuleMonthlyDays",
    version: "2.3.0",
    description: "Sets the monthly days for the current recurrence rule",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "days",
            description: "The days within a month to recur on",
            rest: true,
            required: true,
            type: ArgType.Number,
        },
    ],
    execute(ctx, [days]) {
        const rule = ctx.scheduledEvent.recurrenceRule
        if (rule?.frequency === GuildScheduledEventRecurrenceRuleFrequency.Yearly) {
            ctx.scheduledEvent.recurrenceRule = {
                ...rule,
                byMonthDay: days
            }
        }
        return this.success()
    },
})