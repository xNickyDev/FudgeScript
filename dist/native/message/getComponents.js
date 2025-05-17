"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const component_1 = require("../../properties/component");
const discord_js_1 = require("discord.js");
exports.default = new structures_1.NativeFunction({
    name: "$getComponents",
    version: "1.4.0",
    description: "Retrieves data of a component, not providing any property returns component json",
    unwrap: true,
    brackets: false,
    aliases: ["$getComponent"],
    args: [
        {
            name: "channel ID",
            description: "The channel to pull message from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Channel,
            check: (i) => i.isTextBased(),
        },
        {
            name: "message ID",
            description: "The message to retrieve data from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Message,
            pointer: 0,
        },
        {
            name: "row index",
            description: "The row index to get data from",
            rest: false,
            required: false,
            type: structures_1.ArgType.Number,
        },
        {
            name: "component index",
            description: "The first component index to get data from",
            rest: false,
            required: false,
            type: structures_1.ArgType.Number,
        },
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: component_1.ComponentProperty,
            required: false,
        },
        {
            name: "separator",
            description: "The separator to use for each value in case of array",
            rest: false,
            type: structures_1.ArgType.String,
        },
        {
            name: "component index",
            description: "The second component index to get data from",
            rest: false,
            type: structures_1.ArgType.Number,
        },
    ],
    output: [
        structures_1.ArgType.Json,
        structures_1.ArgType.Unknown
    ],
    execute(ctx, [, m, rowIndex, compIndex1, prop, sep, compIndex2]) {
        m ??= ctx.message;
        let isV2 = m.flags.has(discord_js_1.MessageFlags.IsComponentsV2);
        if (typeof rowIndex !== "number") {
            return this.successJSON(m?.components.map((x) => isV2 ? x : x.components));
        }
        const row = m.components[rowIndex];
        const comps = "components" in row ? row.components : undefined;
        const comp = (typeof compIndex1 === "number" && comps ? comps[compIndex1] : undefined);
        if (prop === null) {
            return this.successJSON(comp?.toJSON() ?? (isV2 ? row : comps));
        }
        return this.success(component_1.ComponentProperties[prop](comp, sep));
    },
});
//# sourceMappingURL=getComponents.js.map