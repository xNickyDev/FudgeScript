"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$newContainer",
    version: "2.3.0",
    description: "Creates a new component container",
    unwrap: false,
    brackets: false,
    experimental: true,
    args: [
        {
            name: "components",
            description: "The components to add",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    async execute(ctx) {
        const [code] = this.data.fields;
        ctx.container.isComponentsV2 = true;
        ctx.container.containers.push(new discord_js_1.ContainerBuilder());
        if (code) {
            const resolved = await this["resolveCode"](ctx, code);
            if (!this["isValidReturnType"](resolved))
                return resolved;
        }
        return this.success();
    },
});
//# sourceMappingURL=newContainer.js.map