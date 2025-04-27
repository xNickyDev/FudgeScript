"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$addContainer",
    version: "2.3.0",
    description: "Adds a new component container",
    unwrap: false,
    experimental: true,
    execute(ctx) {
        ctx.container.isComponentsV2 = true;
        ctx.container.containers.push(new discord_js_1.ContainerBuilder());
        return this.success();
    },
});
//# sourceMappingURL=addContainer.js.map