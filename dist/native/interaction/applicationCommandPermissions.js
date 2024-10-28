"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$applicationCommandPermissions",
    version: "1.5.0",
    description: "Returns an application command's permissions",
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull command from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
        {
            name: "id",
            description: "The id of the command to pull its permissions",
            rest: false,
            required: true,
            pointer: 0,
            type: structures_1.ArgType.String,
        },
    ],
    output: structures_1.ArgType.Json,
    unwrap: true,
    async execute(ctx, [g, id]) {
        if (this.hasFields) {
            const guild = g ?? ctx.guild;
            return this.success(await guild.commands.permissions.fetch({ command: id }).catch(ctx.noop));
        }
        return this.successJSON(ctx.interaction && "command" in ctx.interaction ? ctx.interaction.command?.permissions : undefined);
    },
});
//# sourceMappingURL=applicationCommandPermissions.js.map