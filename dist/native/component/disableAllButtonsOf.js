"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
const lodash_1 = require("lodash");
exports.default = new structures_1.NativeFunction({
    name: "$disableAllButtonsOf",
    version: "1.5.0",
    description: "Disables all buttons of a message, returns bool",
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
        const data = msg.components.map(x => discord_js_1.ActionRowBuilder.from(x));
        const components = (0, lodash_1.isNumber)(index) ? [data[index]] : data;
        components.map(row => {
            const actionRow = new discord_js_1.ActionRowBuilder();
            row?.components.forEach(component => {
                if (component instanceof discord_js_1.ButtonBuilder) {
                    actionRow.addComponents(component.setDisabled(true));
                }
                else {
                    actionRow.addComponents(component);
                }
            });
            return actionRow;
        });
        return this.success(!!(await msg.edit({ components: components }).catch(ctx.noop)));
    },
});
//# sourceMappingURL=disableAllButtonsOf.js.map