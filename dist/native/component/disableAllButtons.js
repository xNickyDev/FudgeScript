"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
const lodash_1 = require("lodash");
exports.default = new structures_1.NativeFunction({
    name: "$disableAllButtons",
    version: "1.5.0",
    description: "Disables all buttons on the current message",
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
    async execute(ctx, [index]) {
        const data = ctx.container.components;
        const components = (0, lodash_1.isNumber)(index) ? [data[index]] : data;
        components.map(row => {
            const actionRow = new discord_js_1.ActionRowBuilder();
            row?.components.forEach(component => {
                if (component instanceof discord_js_1.ButtonBuilder) {
                    const disabledButton = component.setDisabled(true);
                    actionRow.addComponents(disabledButton);
                }
                else {
                    actionRow.addComponents(component);
                }
            });
            return actionRow;
        });
        return this.success();
    },
});
//# sourceMappingURL=disableAllButtons.js.map