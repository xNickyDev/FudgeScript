"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$forumDefaultReactionEmoji",
    description: "Returns the default recation emoji of a forum",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to get default recation emoji of",
            rest: false,
            type: structures_1.ArgType.Channel,
            check: (i) => i.isThreadOnly(),
            required: true
        },
    ],
    output: structures_1.ArgType.DefaultReactionEmoji,
    execute(ctx, [chan]) {
        return this.success(chan?.defaultReactionEmoji);
    },
});
//# sourceMappingURL=forumDefaultReactionEmoji.js.map