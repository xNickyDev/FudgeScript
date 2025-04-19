"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
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
            type: structures_1.ArgType.Enum,
            enum: discord_js_1.GuildScheduledEventRecurrenceRuleWeekday
        },
    ],
    execute(ctx, [weekdays]) {
        const rule = ctx.scheduledEvent.recurrenceRule;
        if (rule?.frequency === discord_js_1.GuildScheduledEventRecurrenceRuleFrequency.Weekly ||
            rule?.frequency === discord_js_1.GuildScheduledEventRecurrenceRuleFrequency.Daily) {
            ctx.scheduledEvent.recurrenceRule = {
                ...rule,
                byWeekday: weekdays
            };
        }
        return this.success();
    },
});
//# sourceMappingURL=setRecurrenceRuleWeekdays.js.map