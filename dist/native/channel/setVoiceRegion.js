"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setVoiceRegion",
    description: "Sets the region of a voice channel, returns bool",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to set region",
            rest: false,
            required: true,
            type: structures_1.ArgType.Channel,
            check: (i) => i.isVoiceBased()
        },
        {
            name: "region",
            description: "The region to set",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        },
        {
            name: "reason",
            description: "Reason to set the voice region",
            rest: false,
            required: false,
            type: structures_1.ArgType.String
        }
    ],
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [voice, region, reason]) {
        return this.success(!!(await voice.setRTCRegion(region, reason ?? undefined).catch(ctx.noop)));
    },
});
//# sourceMappingURL=setVoiceRegion.js.map