"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$addLabel",
    version: "2.6.0",
    description: "Adds a new label component to the modal",
    unwrap: false,
    brackets: true,
    args: [
        {
            name: "name",
            description: "The name for the label",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "description",
            description: "The description for the label",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    async execute(ctx) {
        if (!ctx.interaction)
            return this.success();
        const { args, return: rt } = await this["resolveMultipleArgs"](ctx, 0, 1);
        if (!this["isValidReturnType"](rt))
            return rt;
        const [name, desc] = args;
        const label = new discord_js_1.LabelBuilder().setLabel(name);
        if (desc)
            label.setDescription(desc);
        ctx.container.modal?.addLabelComponents(label);
        return this.success();
    },
});
//# sourceMappingURL=addLabel.js.map