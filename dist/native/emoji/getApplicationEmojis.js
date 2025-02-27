"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const applicationEmoji_1 = require("../../properties/applicationEmoji");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$getApplicationEmojis",
    version: "1.5.0",
    description: "Gets all application emojis",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "property",
            description: "The property to return for every emoji",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: applicationEmoji_1.ApplicationEmojiProperty
        },
        {
            name: "separator",
            description: "The separator to use for every emoji property",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    output: structures_1.ArgType.Unknown,
    async execute(ctx, [prop, sep]) {
        const emojis = await ctx.client.application.emojis.fetch().catch(ctx.noop);
        return this.successJSON(!prop ? emojis : emojis?.map(emoji => applicationEmoji_1.ApplicationEmojiProperties[prop](emoji)).join(sep ?? ", "));
    },
});
//# sourceMappingURL=getApplicationEmojis.js.map