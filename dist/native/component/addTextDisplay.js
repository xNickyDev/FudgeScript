"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$addTextDisplay",
    version: "2.3.0",
    description: "Adds a new text display component to the current container",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "content",
            description: "The content of this text display",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    execute(ctx, [content]) {
        const comp = new discord_js_1.TextDisplayBuilder().setContent(content);
        ctx.container.containers.at(-1)?.addTextDisplayComponents(comp);
        return this.success();
    },
});
//# sourceMappingURL=addTextDisplay.js.map