import { GuildScheduledEventRecurrenceRuleFrequency } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$setScheduledEventRecurrenceRule",
    version: "2.3.0",
    description: "Sets a recurrence rule for the current scheduled event",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "frequency",
            description: "The frequency of the recurrence rule",
            rest: false,
            required: true,
            type: ArgType.Enum,
            enum: GuildScheduledEventRecurrenceRuleFrequency
        },
        {
            name: "interval",
            description: "The interval spacing between the events",
            rest: false,
            type: ArgType.Number,
        },
    ],
    execute(ctx, [frequency, interval]) {
        ctx.scheduledEvent.recurrenceRule = {
            frequency,
            interval: interval || undefined
        }
        return this.success()
    },
})