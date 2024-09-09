"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setAutomodAction",
    version: "1.5.0",
    description: "Sets a new automod rule action",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "enabled",
            description: "Whether to enable mention raid protection",
            rest: false,
            required: true,
            type: structures_1.ArgType.Boolean,
        },
    ],
    async execute(ctx, [enabled]) {
        if (ctx.automodRule.triggerMetadata)
            ctx.automodRule.triggerMetadata.mentionRaidProtectionEnabled = enabled;
        return this.success();
    },
});
//# sourceMappingURL=setAutomodMentionRaidProtection.js.map