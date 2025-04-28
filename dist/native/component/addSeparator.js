"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$addSeparator",
    version: "2.3.0",
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
        const comp = ctx.container.components.at(-1);
        const row = ctx.container.actionRow;
        if (row && comp instanceof discord_js_1.ContainerBuilder) {
            comp.addActionRowComponents(row);
            delete ctx.container.actionRow;
        }
        if (comp instanceof discord_js_1.ContainerBuilder) {
            const sep = new discord_js_1.SeparatorBuilder().setSpacing(spacing).setDivider(typeof (divider) === "boolean" ? divider : undefined);
            comp.addSeparatorComponents(sep);
        }
        return this.success();
    },
});
//# sourceMappingURL=addSeparator.js.map