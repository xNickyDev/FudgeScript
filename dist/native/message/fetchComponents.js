"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const components_1 = require("../../functions/components");
exports.default = new structures_1.NativeFunction({
    name: "$fetchComponents",
    version: "1.0.0",
    description: "Fetch a message's components, this will override any other component added to the response",
    aliases: ["$fetchRows"],
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel id to get the message from",
            rest: false,
            required: true,
            type: structures_1.ArgType.TextChannel,
        },
        {
            name: "message ID",
            description: "The message id to get the components from",
            pointer: 0,
            rest: false,
            type: structures_1.ArgType.Message,
            required: true,
        },
    ],
    brackets: false,
    execute(ctx, [, msg]) {
        ctx.container.components = (msg ?? ctx.message)?.components.map((x) => (0, components_1.buildComponent)(ctx, x)) ?? [];
        return this.success();
    },
});
//# sourceMappingURL=fetchComponents.js.map