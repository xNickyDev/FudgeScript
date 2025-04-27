"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$addContainer",
    version: "2.3.0",
    description: "Adds a new component container",
    brackets: true,
    unwrap: false,
    experimental: true,
    args: [
        {
            name: "components",
            description: "The components to add",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        }
    ],
    async execute(ctx) {
        const comp = this.data.fields[0];
        const resolved = await this["resolveCode"](ctx, comp);
        if (!this["isValidReturnType"](resolved))
            return resolved;
        ctx.container.containers.push(resolved.value);
        return this.success();
    },
});
//# sourceMappingURL=addContainer.js.map