"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const components_1 = require("../../functions/components");
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
        components.forEach((comp, i) => {
            if (!Number.isFinite(index) || i === index)
                (0, components_1.disableButtons)(comp);
        });
        return this.success(!!(await msg.edit({ components: components.map((x) => x.toJSON()) }).catch(ctx.noop)));
    },
});
//# sourceMappingURL=disableButtonsOf.js.map