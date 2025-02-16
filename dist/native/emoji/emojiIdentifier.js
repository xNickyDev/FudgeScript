"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$emojiIdentifier",
    version: "1.0.0",
    description: "Returns the emoji identifier",
    brackets: false,
    unwrap: true,
    output: structures_1.ArgType.String,
    args: [
        {
            name: "emoji ID",
            description: "The emoji id to return its identifier",
            rest: false,
            type: structures_1.ArgType.Emoji,
            required: true,
        },
    ],
    execute(ctx, [emoji]) {
        return this.success((emoji ?? ctx.emoji)?.identifier);
    },
});
//# sourceMappingURL=emojiIdentifier.js.map