"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
const buildActionRow_1 = require("../../functions/buildActionRow");
exports.default = new structures_1.NativeFunction({
    name: "$addContainer",
    version: "2.4.0",
    description: "Creates a new component container",
    unwrap: false,
    brackets: true,
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
        ctx.container.components.push(new discord_js_1.ContainerBuilder());
        ctx.container.context.push(discord_js_1.ComponentType.Container);
        const code = this.data.fields[0];
        const resolved = await this["resolveCode"](ctx, code);
        if (!this["isValidReturnType"](resolved))
            return resolved;
        (0, buildActionRow_1.buildActionRow)(ctx);
        ctx.container.context.pop();
        return this.success();
    },
});
//# sourceMappingURL=addContainer.js.map