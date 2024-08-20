"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$createAutomodRule",
    version: "1.5.0",
    description: "Creates a new automod rule, returns bool",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to create automod rule on",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
        {
            name: "name",
            description: "The name of the automod rule",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "trigger",
            description: "The trigger of the automod rule",
            rest: false,
            required: true,
            type: structures_1.ArgType.Enum,
            enum: discord_js_1.AutoModerationRuleTriggerType
        },
    ],
    output: structures_1.ArgType.Boolean,
    execute(ctx, [guild, name, trigger]) {
        return this.success();
    },
});
//# sourceMappingURL=createAutomodRule.js.map