"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$addRadioGroup",
    description: "Adds a new radio group component to the newest modal label",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "custom ID",
            description: "The custom id for this field",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "required",
            description: "Whether selecting an option is required",
            rest: false,
            type: structures_1.ArgType.Boolean,
        },
    ],
    execute(ctx, [id, required]) {
        const comp = ctx.container.modal?.components.at(-1);
        const field = new discord_js_1.RadioGroupBuilder()
            .setCustomId(id)
            .setRequired(required || false);
        if (comp instanceof discord_js_1.LabelBuilder)
            comp.setRadioGroupComponent(field);
        return this.success();
    },
});
//# sourceMappingURL=addRadioGroup.js.map