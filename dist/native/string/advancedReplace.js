"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$advancedReplace",
    version: "1.5.0",
    aliases: [
        "$advancedReplaceText"
    ],
    output: structures_1.ArgType.String,
    description: "Replaces text in a string multiple times",
    unwrap: false,
    args: [
        {
            name: "text",
            description: "The base text",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "match",
            description: "Text to match in base",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "new value",
            description: "The text to replace matches with",
            type: structures_1.ArgType.String,
            rest: true,
            required: true
        },
    ],
    brackets: true,
    async execute(ctx) {
        const { args, return: rt } = await this["resolveMultipleArgs"](ctx, 1);
        if (!this["isValidReturnType"](rt))
            return rt;
        let text = args[0];
        for (let i = 0; i < args.length; i += 2) {
            const match = args[i];
            const replacement = args[i + 1];
            text = text.replaceAll(match, replacement);
        }
        return this.success(text);
    },
});
//# sourceMappingURL=advancedReplace.js.map