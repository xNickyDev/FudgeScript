"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$addCheckboxGroup",
    description: "Adds a new checkbox group component to the newest modal label",
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
            name: "min options",
            description: "The min options that can be selected",
            rest: false,
            type: structures_1.ArgType.Number,
        },
        {
            name: "max options",
            description: "The max options that can be selected",
            rest: false,
            type: structures_1.ArgType.Number,
        },
        {
            name: "required",
            description: "Whether selecting an option is required",
            rest: false,
            type: structures_1.ArgType.Boolean,
        },
    ],
    execute(ctx, [id, min, max, required]) {
        const comp = ctx.container.modal?.components.at(-1);
        const field = new discord_js_1.CheckboxGroupBuilder()
            .setCustomId(id)
            .setRequired(required || false);
        if (min)
            field.setMinValues(min);
        if (max)
            field.setMaxValues(max);
        if (comp instanceof discord_js_1.LabelBuilder)
            comp.setCheckboxGroupComponent(field);
        return this.success();
    },
});
//# sourceMappingURL=addCheckboxGroup.js.map