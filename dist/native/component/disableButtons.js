"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
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
        const disableButton = (btn) => {
            if (btn instanceof discord_js_1.ButtonBuilder)
                btn.setDisabled(true);
        };
        const processComponent = (comp) => {
            if (comp instanceof discord_js_1.ActionRowBuilder)
                comp.components.forEach(disableButton);
            else if (comp instanceof discord_js_1.SectionBuilder)
                disableButton(comp.accessory);
            else if (comp instanceof discord_js_1.ContainerBuilder)
                comp.components.forEach(processComponent);
        };
        components.forEach(processComponent);
        return this.success();
    },
});
//# sourceMappingURL=disableButtons.js.map