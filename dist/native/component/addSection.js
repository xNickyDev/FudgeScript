"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const buildActionRow_1 = require("../../functions/buildActionRow");
const discord_js_1 = require("discord.js");
const addButton_1 = __importDefault(require("./addButton"));
const addTextDisplay_1 = __importDefault(require("./addTextDisplay"));
exports.default = new structures_1.NativeFunction({
    name: "$addSection",
    description: "Adds a new section component",
    unwrap: false,
    brackets: true,
    args: [
        {
            name: "components",
            description: "The components and accessories to add",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    async execute(ctx) {
        (0, buildActionRow_1.buildActionRow)(ctx);
        const comp = ctx.container.components.at(-1);
        ctx.component.section = new discord_js_1.SectionBuilder();
        const textDisplay = this.getFunction(0, addTextDisplay_1.default);
        const newButton = this.getFunction(0, addButton_1.default);
        const text = await textDisplay?.execute(ctx);
        if (!this["isValidReturnType"](text))
            return text;
        if (newButton) {
            const button = await newButton.execute(ctx);
            if (!this["isValidReturnType"](button))
                return button;
        }
        if (comp instanceof discord_js_1.ContainerBuilder && ctx.container.isInside(discord_js_1.ComponentType.Container))
            comp.addSectionComponents(ctx.component.section);
        else
            ctx.container.components.push(ctx.component.section);
        return this.success();
    },
});
//# sourceMappingURL=addSection.js.map