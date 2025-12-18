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
            name: "color",
            rest: false,
            description: "The color of the horse",
            type: structures_1.ArgType.Color,
            required: false,
        },
        {
            name: "name",
            rest: false,
            description: "The name of the horse",
            type: structures_1.ArgType.String,
            default: "Amadeus",
            required: false,
        },
    ],
    brackets: false,
    output: structures_1.ArgType.Emoji,
    execute(ctx, [color, name]) {
        const horses = ["🐴", "🐎", "🎠", "🏇"];
        return this.success(name + horses[Math.floor(Math.random() * horses.length)]);
    },
});
//# sourceMappingURL=horse.js.map