"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$addSpoiler",
    description: "Adds a spoiler to the current container",
    unwrap: false,
    execute(ctx) {
        const comp = ctx.container.components.at(-1);
        if (comp instanceof discord_js_1.ContainerBuilder)
            comp.setSpoiler(true);
        return this.success();
    },
});
//# sourceMappingURL=addSpoiler.js.map