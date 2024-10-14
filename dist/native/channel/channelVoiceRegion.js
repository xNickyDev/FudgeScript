"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$channelVoiceRegion",
    version: "1.5.0",
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
        const chan = (ch ?? ctx.channel);
        return this.success("rtcRegion" in chan ? chan.rtcRegion : undefined);
    },
});
//# sourceMappingURL=channelVoiceRegion.js.map