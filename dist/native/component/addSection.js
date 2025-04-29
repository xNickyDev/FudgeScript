"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const buildActionRow_1 = require("../../functions/buildActionRow");
const discord_js_1 = require("discord.js");
exports.default = new structures_1.NativeFunction({
    name: "$addSection",
    version: "2.4.0",
    description: "Adds a new section component",
    unwrap: false,
    brackets: true,
    args: [
        {
            name: "components",
            description: "The components and accessory to add",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    async execute(ctx) {
        (0, buildActionRow_1.buildActionRow)(ctx);
        const comp = ctx.container.components.at(-1);
        ctx.container.section = new discord_js_1.SectionBuilder();
        const code = this.data.fields[0];
        const resolved = await this["resolveCode"](ctx, code);
        if (!this["isValidReturnType"](resolved))
            return resolved;
        if (comp instanceof discord_js_1.ContainerBuilder && ctx.container.isInside(discord_js_1.ComponentType.Container))
            comp.addSectionComponents(ctx.container.section);
        else
            ctx.container.components.push(ctx.container.section);
        delete ctx.container.section;
        return this.success();
    },
});
//# sourceMappingURL=addSection.js.map