"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$userReferenceID",
    version: "1.5.0",
    description: "Returns the id of the user this message replies to",
    unwrap: true,
    output: structures_1.ArgType.User,
    args: [
        {
            name: "channel ID",
            rest: false,
            required: true,
            description: "The channel to get the message from",
            type: structures_1.ArgType.Channel,
            check: (i) => i.isTextBased(),
        },
        {
            name: "message ID",
            description: "The message to get its reference",
            rest: false,
            type: structures_1.ArgType.Message,
            pointer: 0,
            required: true,
        },
    ],
    brackets: false,
    async execute(ctx, [channel, message]) {
        const ch = (channel ?? ctx.channel);
        const msg = message ?? ctx.message;
        const id = msg?.reference?.messageId;
        return this.success(id);
    }
});
//# sourceMappingURL=userReferenceID.js.map