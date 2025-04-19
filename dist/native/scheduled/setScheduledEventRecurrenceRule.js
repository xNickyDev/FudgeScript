"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
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
            type: structures_1.ArgType.Enum,
            enum: discord_js_1.GuildScheduledEventRecurrenceRuleFrequency
        },
        {
            name: "interval",
            description: "The interval spacing between the events",
            rest: false,
            type: structures_1.ArgType.Number,
        },
    ],
    execute(ctx, [frequency, interval]) {
        ctx.scheduledEvent.recurrenceRule = {
            frequency,
            interval: interval || undefined
        };
        return this.success();
    },
});
//# sourceMappingURL=setScheduledEventRecurrenceRule.js.map