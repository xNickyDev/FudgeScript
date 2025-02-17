"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setScheduledEventChannel",
    description: "Sets the voice channel for the current scheduled event",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to set",
            rest: false,
            required: true,
            type: structures_1.ArgType.Channel,
            check: (i) => i.isVoiceBased()
        },
    ],
    output: structures_1.ArgType.ScheduledEvent,
    async execute(ctx, [channel]) {
        ctx.scheduledEvent.channel = channel;
        return this.success();
    },
});
//# sourceMappingURL=setScheduledEventChannel.js.map