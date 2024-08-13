"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$webhookEditMessage",
    version: "1.5.0",
    description: "Edits a webhook message, returns bool",
    brackets: true,
    unwrap: true,
    output: structures_1.ArgType.Boolean,
    args: [
        {
            name: "url",
            description: "The webhook url",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "message ID",
            description: "The message to edit",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "content",
            description: "The new content for the message",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        }
    ],
    async execute(ctx, [web, msg, cont]) {
        return this.successJSON(web);
    },
});
//# sourceMappingURL=webhookEditMessage.js.map