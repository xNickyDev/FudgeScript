"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$addSeparator",
    description: "Adds a new separator component to the current container",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "spacing",
            description: "The spacing of this separator",
            rest: false,
            required: true,
            type: structures_1.ArgType.Enum,
            enum: discord_js_1.SeparatorSpacingSize
        },
        {
            name: "divider",
            description: "Whether to show a divider line",
            rest: false,
            type: structures_1.ArgType.Boolean,
        },
    ],
    execute(ctx, [spacing, divider]) {
        const comp = new discord_js_1.SeparatorBuilder().setSpacing(spacing).setDivider(divider || undefined);
        ctx.container.containers.at(-1)?.addSeparatorComponents(comp);
        return this.success();
    },
});
//# sourceMappingURL=addSeparator.js.map