"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
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
            type: structures_1.ArgType.Enum,
            enum: discord_js_1.GuildScheduledEventRecurrenceRuleMonth
        },
    ],
    execute(ctx, [months]) {
        const rule = ctx.scheduledEvent.recurrenceRule;
        if (rule?.frequency === discord_js_1.GuildScheduledEventRecurrenceRuleFrequency.Yearly) {
            ctx.scheduledEvent.recurrenceRule = {
                ...rule,
                byMonth: months
            };
        }
        return this.success();
    },
});
//# sourceMappingURL=setRecurrenceRuleMonths.js.map