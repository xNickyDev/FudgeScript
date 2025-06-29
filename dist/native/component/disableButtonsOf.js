"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const components_1 = require("../../functions/components");
const discord_js_1 = require("discord.js");
exports.default = new structures_1.NativeFunction({
    name: "$disableButtonsOf",
    version: "2.2.0",
    description: "Disables all buttons of a message, returns bool",
    aliases: ["$disableAllButtonsOf"],
    unwrap: true,
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
            description: "The message to disable buttons on",
            rest: false,
            required: true,
            type: structures_1.ArgType.Message,
            pointer: 0
        },
        {
            name: "index",
            description: "The index of the row to disable",
            rest: false,
            type: structures_1.ArgType.Number,
        },
    ],
    brackets: true,
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [, msg, index]) {
        const components = msg.components.map(x => (0, components_1.buildComponent)(x));
        const disableButton = (comp) => {
            if (comp instanceof discord_js_1.ButtonBuilder)
                return comp.setDisabled(true);
            return comp;
        };
        const processComponent = (comp) => {
            if (comp instanceof discord_js_1.ActionRowBuilder)
                return comp.components.map(disableButton);
            else if (comp instanceof discord_js_1.SectionBuilder)
                return disableButton(comp.accessory);
            else if (comp instanceof discord_js_1.ContainerBuilder)
                return comp.components.map(processComponent);
            else
                return comp;
        };
        const comps = components.map((comp, i) => {
            if (Number.isFinite(index) && i !== index)
                return comp;
            return processComponent(comp);
        });
        return this.success(!!(await msg.edit({ components: comps.map((x) => x.toJSON()) }).catch(ctx.noop)));
    },
});
//# sourceMappingURL=disableButtonsOf.js.map