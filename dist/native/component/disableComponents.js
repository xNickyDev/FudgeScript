"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$disableComponents",
    version: "2.2.0",
    description: "Disables all components on the current message",
    aliases: ["$disableAllComponents"],
    unwrap: false,
    execute(ctx) {
        const components = ctx.container.components;
        for (let comp of components) {
            if (!("components" in comp))
                continue;
            if (comp instanceof discord_js_1.ActionRowBuilder) {
                comp.setComponents(comp.components.map((x) => x.setDisabled(true)));
            }
            else if (comp instanceof discord_js_1.SectionBuilder && comp.accessory instanceof discord_js_1.ButtonBuilder) {
                comp.setButtonAccessory(comp.accessory.setDisabled(true));
            }
        }
        return this.success();
    },
});
//# sourceMappingURL=disableComponents.js.map