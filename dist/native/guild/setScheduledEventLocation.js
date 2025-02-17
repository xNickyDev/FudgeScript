"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setScheduledEventLocation",
    version: "2.2.0",
    description: "Sets the location for the current scheduled event",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "location",
            description: "The location to set",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    output: structures_1.ArgType.ScheduledEvent,
    async execute(ctx, [location]) {
        ctx.scheduledEvent.entityMetadata ??= {};
        ctx.scheduledEvent.entityMetadata.location = location;
        return this.success();
    },
});
//# sourceMappingURL=setScheduledEventLocation.js.map