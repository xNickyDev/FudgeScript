"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setGuildDmsDisabled",
    description: "Sets the guild's DMs activity disabled for a specific duration, returns bool",
    aliases: ["$setServerDmsDisabled"],
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to disable DMs for",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
        {
            name: "duration",
            description: "The duration for disabling DMs, omit to enable DMs again",
            rest: false,
            type: structures_1.ArgType.Time,
        },
    ],
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [guild, ms]) {
        return this.success((await guild.setIncidentActions({
            dmsDisabledUntil: ms ? Date.now() + ms : null
        }).catch(() => false)) !== false);
    },
});
//# sourceMappingURL=setGuildDmsDisabled.js.map