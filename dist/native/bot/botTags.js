"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$botTags",
    version: "1.5.0",
    description: "Returns the client tags",
    unwrap: false,
    aliases: [
        "$clientTags"
    ],
    output: structures_1.ArgType.String,
    execute(ctx) {
        return this.success(ctx.client.tags);
    },
});
//# sourceMappingURL=botTags.js.map