"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$addFile",
    version: "2.3.0",
    description: "Adds a new file component to the current container",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "url",
            description: "The url of the file",
            rest: false,
            required: true,
            type: structures_1.ArgType.URL,
        },
        {
            name: "spoiler",
            description: "Whether to set a spoiler",
            rest: false,
            type: structures_1.ArgType.Boolean,
        },
    ],
    execute(ctx, [url, spoiler]) {
        const comp = ctx.container.components.at(-1);
        if (comp instanceof discord_js_1.ContainerBuilder) {
            const file = new discord_js_1.FileBuilder().setURL(url).setSpoiler(typeof (spoiler) === "boolean" ? spoiler : undefined);
            comp.addFileComponents(file);
        }
        return this.success();
    },
});
//# sourceMappingURL=addFile.js.map