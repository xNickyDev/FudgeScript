"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$addUserSelectMenu",
    version: "1.4.0",
    description: "Creates a user select menu",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "custom ID",
            description: "The custom id for this menu",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        },
        {
            name: "placeholder",
            description: "The placeholder to use for the menu",
            rest: false,
            type: structures_1.ArgType.String,
        },
        {
            name: "min values",
            description: "The min values to choose for the menu",
            rest: false,
            type: structures_1.ArgType.Number,
        },
        {
            name: "max values",
            description: "The max values to choose for the menu",
            rest: false,
            type: structures_1.ArgType.Number,
        },
        {
            name: "disabled",
            description: "Whether the menu is disabled by default",
            rest: false,
            required: false,
            type: structures_1.ArgType.Boolean
        },
        {
            name: "required",
            description: "Whether this menu is required inside a modal",
            rest: false,
            type: structures_1.ArgType.Boolean,
        },
    ],
    execute(ctx, [id, placeholder, min, max, disabled, required]) {
        const comp = ctx.container.modal?.components.at(-1);
        const menu = new discord_js_1.UserSelectMenuBuilder()
            .setDisabled(disabled || false)
            .setRequired(required || false)
            .setCustomId(id);
        if (placeholder)
            menu.setPlaceholder(placeholder);
        if (min)
            menu.setMinValues(min);
        if (max)
            menu.setMaxValues(max);
        if (comp instanceof discord_js_1.LabelBuilder)
            comp.setUserSelectMenuComponent(menu);
        else
            ctx.container.actionRow?.addComponents(menu);
        return this.success();
    }
});
//# sourceMappingURL=addUserSelectMenu.js.map