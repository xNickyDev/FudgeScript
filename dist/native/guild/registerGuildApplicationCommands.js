"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$registerGuildApplicationCommands",
    version: "1.4.0",
    description: "Registers guild commands of your bot to a guild, returns bool",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to register commands to",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
        {
            name: "cmds",
            description: "The commands to register to the guild",
            rest: true,
            type: structures_1.ArgType.String,
        },
    ],
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [g, cmds]) {
        g ??= ctx.guild;
        return this.success(!!(await ctx.client.applicationCommands.registerGuild(g, cmds)?.catch(ctx.noop)));
    },
});
//# sourceMappingURL=registerGuildApplicationCommands.js.map