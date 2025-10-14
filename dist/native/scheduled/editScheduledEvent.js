"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$editScheduledEvent",
    description: "Edits an existing scheduled event on a guild, returns bool",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to edit scheduled event on",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
        {
            name: "event ID",
            description: "The scheduled event to edit",
            rest: false,
            required: true,
            type: structures_1.ArgType.ScheduledEvent,
            pointer: 0,
        },
        {
            name: "name",
            description: "The new name for the scheduled event",
            rest: false,
            type: structures_1.ArgType.String,
        },
        {
            name: "description",
            description: "The new description for the scheduled event",
            rest: false,
            type: structures_1.ArgType.String,
        },
        {
            name: "start",
            description: "The new start time for the scheduled event",
            rest: false,
            type: structures_1.ArgType.Date,
        },
        {
            name: "end",
            description: "The new end time for the scheduled event",
            rest: false,
            type: structures_1.ArgType.Date,
        },
        {
            name: "cover",
            description: "The new cover image for the scheduled event",
            rest: false,
            type: structures_1.ArgType.URL,
        },
    ],
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [, event, name, desc, start, end, cover]) {
        const edit = await event.edit({
            name: name || undefined,
            description: desc || undefined,
            scheduledStartTime: start || undefined,
            scheduledEndTime: end || undefined,
            image: cover || undefined,
            channel: ctx.scheduledEvent.channel,
            entityMetadata: ctx.scheduledEvent.entityMetadata,
            reason: ctx.reason
        }).catch(ctx.noop);
        ctx.clearScheduledEventOptions();
        return this.success(!!edit);
    },
});
//# sourceMappingURL=editScheduledEvent.js.map