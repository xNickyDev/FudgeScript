"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const getGuildTemplate_1 = require("./getGuildTemplate");
exports.default = new structures_1.NativeFunction({
    name: "$guildTemplate",
    description: "Returns the template of a guild",
    unwrap: true,
    brackets: false,
    aliases: [
        "$serverTemplate"
    ],
    args: [
        {
            name: "guild ID",
            description: "The guild to get template from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild
        },
        {
            name: "property",
            description: "The property of the template to return",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: getGuildTemplate_1.TemplateProperty
        },
    ],
    output: [
        structures_1.ArgType.Json,
        structures_1.ArgType.Unknown
    ],
    async execute(ctx, [guild, prop]) {
        const template = (await (guild ?? ctx.guild)?.fetchTemplates().catch(ctx.noop))?.first();
        if (!prop)
            return this.successJSON(template || "");
        return this.success(template?.[prop]);
    },
});
//# sourceMappingURL=guildTemplate.js.map