"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$editGuildWelcomeScreen",
    version: "2.1.0",
    description: "Edits the welcome screen of a guild, returns bool",
    unwrap: true,
    aliases: [
        "$editServerWelcomeScreen"
    ],
    output: structures_1.ArgType.Boolean,
    args: [
        {
            name: "guild ID",
            description: "The guild to edit welcome screen on",
            rest: false,
            type: structures_1.ArgType.Guild,
            required: true,
        },
        {
            name: "enabled",
            description: "Whether to enable the welcome screen",
            rest: false,
            type: structures_1.ArgType.Boolean,
        },
        {
            name: "description",
            description: "The new description for the welcome screen",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    brackets: true,
    async execute(ctx, [guild, enabled, desc]) {
        return this.success((await guild.editWelcomeScreen({
            description: desc ?? undefined,
            enabled: (0, lodash_1.isBoolean)(enabled) ? enabled : undefined,
            welcomeChannels: ctx.welcomeScreenChannels || undefined
        }).catch(() => false)) !== false);
    },
});
//# sourceMappingURL=editGuildWelcomeScreen.js.map