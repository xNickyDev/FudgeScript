"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$horse",
    version: "1.5.0",
    description: "Creates a new horse, returns horse",
    unwrap: true,
    args: [
        {
            name: "name",
            rest: false,
            description: "The name of the horse",
            type: structures_1.ArgType.String,
            required: true,
        },
        {
            name: "color",
            rest: false,
            description: "The color of the horse",
            type: structures_1.ArgType.Color,
            required: true,
        },
    ],
    brackets: true,
    output: structures_1.ArgType.Emoji,
    execute(ctx, [name, color]) {
        const horses = ["🐴", "🐎", "🎠", "🏇"];
        return this.success(horses[Math.floor(Math.random() * horses.length)]);
    },
});
//# sourceMappingURL=horse.js.map