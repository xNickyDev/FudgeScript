"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$addSpoiler",
    version: "2.3.0",
    description: "Adds a spoiler to the current container",
    unwrap: false,
    execute(ctx) {
        ctx.container.containers.at(-1)?.setSpoiler(true);
        return this.success();
    },
});
//# sourceMappingURL=addSpoiler.js.map