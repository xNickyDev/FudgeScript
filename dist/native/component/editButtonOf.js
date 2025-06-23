"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
const components_1 = require("../../functions/components");
exports.default = new structures_1.NativeFunction({
    name: "$editButtonOf",
    version: "1.5.0",
    description: "Edits a button component of a message",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel id to pull message from",
            rest: false,
            required: true,
            type: structures_1.ArgType.TextChannel
        },
        {
            name: "message ID",
            description: "The message to edit button for",
            rest: false,
            required: true,
            type: structures_1.ArgType.Message,
            pointer: 0
        },
        {
            name: "custom ID",
            description: "The custom id to find the component",
            rest: false,
            type: structures_1.ArgType.String,
            required: true,
        },
        {
            name: "new custom ID",
            description: "The new custom id for this component",
            rest: false,
            type: structures_1.ArgType.String,
            required: true,
        },
        {
            name: "label",
            description: "The button label",
            rest: false,
            type: structures_1.ArgType.String,
            required: true,
        },
        {
            name: "style",
            description: "The style for this button",
            enum: discord_js_1.ButtonStyle,
            type: structures_1.ArgType.Enum,
            required: true,
            rest: false,
        },
        {
            name: "emoji",
            rest: false,
            type: structures_1.ArgType.String,
            description: "The emoji for this button",
        },
        {
            name: "disabled",
            rest: false,
            type: structures_1.ArgType.Boolean,
            description: "Whether to disable the button",
        },
    ],
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [, m, oldId, id, label, style, emoji, disabled]) {
        const components = m.components.map(x => (0, discord_js_1.createComponentBuilder)(x.toJSON()));
        const btn = (0, components_1.findComponent)(components, oldId);
        console.log(btn);
        if (!(btn instanceof discord_js_1.ButtonBuilder))
            return this.success();
        btn.setDisabled(disabled || btn.data.disabled)
            .setStyle(style || btn.data.style)
            // @ts-ignore
            .setLabel(label || btn.data.label || "");
        // @ts-ignore
        if (style === discord_js_1.ButtonStyle.Link)
            btn.setURL(id || btn.data.custom_id);
        else if (style === discord_js_1.ButtonStyle.Premium)
            btn.setSKUId(id);
        // @ts-ignore
        else
            btn.setCustomId(id || btn.data.custom_id);
        if (emoji)
            btn.setEmoji(emoji);
        return this.success(!!(await m.edit({ components: components.map((x) => x.toJSON()) }).catch(ctx.noop)));
    },
});
//# sourceMappingURL=editButtonOf.js.map