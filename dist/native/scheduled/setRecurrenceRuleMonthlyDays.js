"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
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
            type: structures_1.ArgType.Number,
        },
    ],
    execute(ctx, [days]) {
        const rule = ctx.scheduledEvent.recurrenceRule;
        if (rule?.frequency === discord_js_1.GuildScheduledEventRecurrenceRuleFrequency.Yearly) {
            ctx.scheduledEvent.recurrenceRule = {
                ...rule,
                byMonthDay: days
            };
        }
        return this.success();
    },
});
//# sourceMappingURL=setRecurrenceRuleMonthlyDays.js.map