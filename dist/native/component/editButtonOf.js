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
        const components = m.components.map((x) => (0, components_1.buildComponent)(x));
        outer: for (let i = 0, len = components.length; i < len; i++) {
            const comp = components[i];
            const comps = "components" in comp
                ? comp instanceof discord_js_1.ContainerBuilder
                    ? comp.components.map((x) => (0, components_1.buildComponent)(x.toJSON()))
                    : comp instanceof discord_js_1.SectionBuilder
                        ? new Array((0, components_1.buildActionRow)(comp.accessory?.toJSON()))
                        : comp.components
                : undefined;
            if (!comps)
                continue;
            for (let n = 0, len = comps.length; n < len; n++) {
                const row = comps[n];
                const btn = row instanceof discord_js_1.ActionRowBuilder
                    ? row.components.find((x) => "custom_id" in x.data && x.data.custom_id === oldId)
                    : row instanceof discord_js_1.SectionBuilder
                        ? (0, components_1.buildActionRow)(row.accessory?.toJSON())
                        : row;
                if (btn instanceof discord_js_1.ButtonBuilder) {
                    // @ts-ignore
                    btn.setLabel(label || btn.data.label)
                        .setStyle(style);
                    if (emoji)
                        btn.setEmoji(emoji);
                    if (typeof disabled === "boolean")
                        btn.setDisabled(disabled);
                    if (style === discord_js_1.ButtonStyle.Link)
                        btn.setURL(id);
                    else if (style === discord_js_1.ButtonStyle.Premium)
                        btn.setSKUId(id);
                    else
                        btn.setCustomId(id);
                    if (comp instanceof discord_js_1.ContainerBuilder) {
                        const insert = row instanceof discord_js_1.ActionRowBuilder
                            ? row.setComponents(row.components.splice(row.components.findIndex((x) => "custom_id" in x.data && x.data.custom_id === oldId), 1, btn))
                            : row instanceof discord_js_1.SectionBuilder
                                ? row.setButtonAccessory(btn)
                                : undefined;
                        if (insert)
                            comp.spliceComponents(n, 1, insert);
                    }
                    else if (comp instanceof discord_js_1.SectionBuilder)
                        comp.setButtonAccessory(btn);
                    break outer;
                }
            }
        }
        return this.success(!!(await m.edit({ components: components.map((x) => x.toJSON()) }).catch(ctx.noop)));
    },
});
//# sourceMappingURL=editButtonOf.js.map