"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$disableAllButtons",
    version: "1.5.0",
    description: "Disables all buttons on the current message",
    unwrap: true,
    async execute(ctx) {
        const components = ctx.container.components;
        components.map(row => {
            const actionRow = new discord_js_1.ActionRowBuilder();
            row.components.forEach(component => {
                if (component instanceof discord_js_1.ButtonBuilder) {
                    const disabledButton = discord_js_1.ButtonBuilder.from(component).setDisabled(true);
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