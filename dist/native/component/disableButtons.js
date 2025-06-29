"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const components_1 = require("../../functions/components");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$disableButtons",
    version: "2.2.0",
    description: "Disables all buttons on the current message",
    aliases: ["$disableAllButtons"],
    unwrap: true,
    args: [
        {
            name: "index",
            description: "The index of the row to disable",
            rest: false,
            required: true,
            type: structures_1.ArgType.Number,
        },
    ],
    brackets: false,
    execute(ctx, [index]) {
        const data = ctx.container.components;
        const components = Number.isFinite(index) ? new Array(data[index]) : data;
        components.forEach(components_1.disableButtons);
        return this.success();
    },
});
//# sourceMappingURL=disableButtons.js.map