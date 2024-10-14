"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$channelVoiceRegion",
    description: "Returns the region of a voice channel",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "channel ID",
            description: "The channel to get its region",
            rest: false,
            type: structures_1.ArgType.Channel,
            check: (i) => i.isVoiceBased()
        },
    ],
    output: structures_1.ArgType.String,
    execute(ctx, [ch]) {
        const channel = (ch ?? ctx.channel);
        return this.success(channel?.rtcRegion);
    },
});
//# sourceMappingURL=channelVoiceRegion.js.map