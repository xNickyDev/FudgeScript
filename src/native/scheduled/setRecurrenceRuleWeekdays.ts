import { GuildScheduledEventRecurrenceRuleFrequency, GuildScheduledEventRecurrenceRuleWeekday } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$setRecurrenceRuleWeekdays",
    version: "2.3.0",
    description: "Sets the weekdays for the current recurrence rule",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "weekdays",
            description: "The days within a week to recur on",
            rest: true,
            required: true,
            type: ArgType.Enum,
            enum: GuildScheduledEventRecurrenceRuleWeekday
        },
    ],
    execute(ctx, [weekdays]) {
        const rule = ctx.scheduledEvent.recurrenceRule
        if (
            rule?.frequency === GuildScheduledEventRecurrenceRuleFrequency.Weekly ||
            rule?.frequency === GuildScheduledEventRecurrenceRuleFrequency.Daily
        ) {
            ctx.scheduledEvent.recurrenceRule = {
                ...rule,
                byWeekday: weekdays
            }
        }
        return this.success()
    },
})