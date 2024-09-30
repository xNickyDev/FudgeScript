"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$applicationSubCommandGroupName",
    description: "Returns an application sub command group name",
    unwrap: false,
    output: structures_1.ArgType.String,
    execute(ctx) {
        return this.success(ctx.interaction?.isChatInputCommand() ? ctx.interaction.options.getSubcommandGroup(false) : undefined);
    },
});
//# sourceMappingURL=applicationSubCommandGroupName.js.map