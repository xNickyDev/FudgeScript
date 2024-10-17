"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setOnboardingDefaultChannels",
    version: "1.5.0",
    description: "Sets default channels for the current onboarding",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channels",
            description: "The channels that new members get opted into automatically",
            rest: true,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    execute(ctx, [channels]) {
        ctx.onboarding.defaultChannels = channels;
        return this.success();
    },
});
//# sourceMappingURL=setOnboardingDefaultChannels.js.map