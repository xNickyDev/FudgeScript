"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildActionRow = void 0;
const discord_js_1 = require("discord.js");
function buildActionRow(ctx) {
    ctx.container.isComponentsV2 = true;
    const comp = ctx.container.components.at(-1);
    if (ctx.container.actionRow && comp instanceof discord_js_1.ContainerBuilder) {
        comp.addActionRowComponents(ctx.container.actionRow);
        delete ctx.container.actionRow;
    }
}
exports.buildActionRow = buildActionRow;
//# sourceMappingURL=buildActionRow.js.map