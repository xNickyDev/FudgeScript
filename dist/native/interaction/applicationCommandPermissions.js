"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$applicationCommandPermissions",
    description: "Returns an application command permissions in JSON format",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "id",
            description: "The id of the command to pull its permissions",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    output: structures_1.ArgType.Json,
    async execute(ctx, [id]) {
        if (this.hasFields) {
            const command = await ctx.client.application.commands.fetch(id).catch(ctx.noop);
            return this.successJSON(command ? command.permissions : undefined);
        }
        return this.successJSON(ctx.interaction && "command" in ctx.interaction ? ctx.interaction.command?.permissions : undefined);
    },
});
//# sourceMappingURL=applicationCommandPermissions.js.map