"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$createGuildFromTemplate",
    version: "2.3.0",
    description: "Creates a new guild from a template, returns guild id",
    aliases: [
        "$createServerFromTemplate"
    ],
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "template code",
            description: "The code of the template to create guild with",
            rest: false,
            required: true,
            type: structures_1.ArgType.Template,
        },
        {
            name: "name",
            description: "The name for the guild",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "icon",
            description: "The icon for the guild",
            rest: false,
            type: structures_1.ArgType.URL,
        },
    ],
    output: structures_1.ArgType.Guild,
    async execute(ctx, [temp, name, icon]) {
        const guild = await temp.createGuild(name || temp.guild?.name || "", icon || temp.guild?.iconURL() || undefined).catch(ctx.noop);
        return this.success(guild?.id);
    },
});
//# sourceMappingURL=createGuildFromTemplate.js.map