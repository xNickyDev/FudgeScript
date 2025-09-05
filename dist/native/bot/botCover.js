"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$botCover",
    version: "2.5.0",
    description: "Returns the client's cover image",
    aliases: [
        "$clientCover"
    ],
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "size",
            description: "The size to use for the image",
            rest: false,
            type: structures_1.ArgType.Number,
        },
        {
            name: "extension",
            description: "The extension to use for the image",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    output: structures_1.ArgType.URL,
    execute(ctx, [size, ext]) {
        return this.success(ctx.client.application.coverURL({
            extension: ext || undefined,
            size: size || 2048,
        }));
    },
});
//# sourceMappingURL=botCover.js.map