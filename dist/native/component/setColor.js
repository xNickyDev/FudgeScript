"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setColor",
    description: "Sets a color for the current container",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "color",
            description: "The color to set",
            rest: false,
            required: true,
            type: structures_1.ArgType.Color,
        },
    ],
    execute(ctx, [color]) {
        const comp = ctx.container.components.at(-1);
        if (comp instanceof discord_js_1.ContainerBuilder)
            comp.setAccentColor(color);
        return this.success();
    },
});
//# sourceMappingURL=setColor.js.map