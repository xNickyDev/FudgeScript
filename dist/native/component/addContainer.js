"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
const buildActionRow_1 = require("../../functions/buildActionRow");
const hex_1 = require("../../functions/hex");
exports.default = new structures_1.NativeFunction({
    name: "$addContainer",
    version: "2.4.0",
    description: "Adds a new container component",
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
        {
            name: "color",
            description: "The color to set",
            rest: false,
            type: structures_1.ArgType.Color,
        },
        {
            name: "spoiler",
            description: "Whether to set a spoiler",
            rest: false,
            type: structures_1.ArgType.Boolean,
        },
        {
            name: "id",
            description: "The id for this container component",
            rest: false,
            type: structures_1.ArgType.Number,
        },
    ],
    async execute(ctx) {
        (0, buildActionRow_1.buildActionRow)(ctx);
        ctx.container.components.push(new discord_js_1.ContainerBuilder());
        ctx.container.context.push(discord_js_1.ComponentType.Container);
        const comp = ctx.container.components.at(-1);
        const color = this.displayField(1);
        if (color)
            comp.setAccentColor((0, hex_1.resolveColor)(color));
        const spoiler = this.displayField(2);
        if (spoiler)
            comp.setSpoiler(Boolean(spoiler));
        const id = this.displayField(2);
        if (id)
            comp.setId(Number(id));
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