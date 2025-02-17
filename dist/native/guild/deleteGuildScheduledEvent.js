"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$deleteGuildScheduledEvent",
    description: "Deletes a scheduled event from a guild, returns bool",
    aliases: [
        "$deleteScheduledEvent",
        "$deleteServerScheduledEvent"
    ],
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to delete scheduled event from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
        {
            name: "event ID",
            description: "The scheduled event to delete",
            rest: false,
            required: true,
            type: structures_1.ArgType.ScheduledEvent,
            pointer: 0
        },
    ],
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [guild, event]) {
        try {
            await guild.scheduledEvents.delete(event);
        }
        catch (error) {
            ctx.noop(error);
            return this.success(false);
        }
        return this.success(true);
    },
});
//# sourceMappingURL=deleteGuildScheduledEvent.js.map