"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setColor",
    version: "2.3.0",
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
        ctx.container.containers.at(-1)?.setAccentColor(color);
        return this.success();
    },
});
//# sourceMappingURL=setColor.js.map