"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$disableRoleMentions",
    version: "1.3.0",
    description: "Disables all role mentions",
    unwrap: false,
    execute(ctx) {
        const mentions = ctx.container.allowedMentions;
        mentions.parse = mentions.parse?.filter((x) => x !== "roles");
        mentions.roles = [];
        return this.success();
    },
});
//# sourceMappingURL=disableRoleMentions.js.map