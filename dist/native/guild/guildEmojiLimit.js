"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$guildEmojiLimit",
    description: "Returns the emoji limit of a guild",
    brackets: false,
    aliases: [
        "$serverEmojiLimit"
    ],
    args: [
        {
            name: "guild ID",
            description: "The guild to retrieve the data",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
    ],
    output: structures_1.ArgType.Number,
    unwrap: true,
    execute(ctx, [guild]) {
        let tier = (guild ?? ctx.guild)?.premiumTier;
        return this.success(tier === 0
            ? 50
            : tier === 1
                ? 100
                : tier === 2
                    ? 150
                    : tier === 3
                        ? 250
                        : undefined);
    },
});
//# sourceMappingURL=guildEmojiLimit.js.map