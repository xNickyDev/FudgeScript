"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$deleteGuildIntegration",
    version: "2.4.0",
    description: "Deletes an integration from a guild, returns bool",
    aliases: [
        "$deleteServerIntegration"
    ],
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to fetch integration from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
        {
            name: "integration ID",
            description: "The integration to delete",
            rest: false,
            required: true,
            type: structures_1.ArgType.Integration,
            pointer: 0,
        },
        {
            name: "reason",
            description: "The reason for deleting this integration",
            rest: false,
            type: structures_1.ArgType.String
        },
    ],
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [, integration, reason]) {
        return this.success(!!(await integration.delete(reason || undefined).catch(ctx.noop)));
    },
});
//# sourceMappingURL=deleteGuildIntegration.js.map