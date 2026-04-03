"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$addCheckbox",
    description: "Adds a new checkbox component to the newest modal label",
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
            name: "default",
            description: "Whether this field is checked by default",
            rest: false,
            type: structures_1.ArgType.Boolean,
        },
    ],
    execute(ctx, [id, def]) {
        const comp = ctx.container.modal?.components.at(-1);
        const field = new discord_js_1.CheckboxBuilder()
            .setCustomId(id)
            .setDefault(def || false);
        if (comp instanceof discord_js_1.LabelBuilder)
            comp.setCheckboxComponent(field);
        return this.success();
    },
});
//# sourceMappingURL=addCheckbox.js.map