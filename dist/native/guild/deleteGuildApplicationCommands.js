"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$deleteGuildApplicationCommands",
    version: "1.4.0",
    description: "Deletes guild commands of your bot from a guild, returns bool",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to delete commands from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
        {
            name: "cmds",
            description: "The commands to delete from the guild",
            rest: true,
            type: structures_1.ArgType.String,
        },
    ],
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [g, cmds]) {
        g ??= ctx.guild;
        if (!cmds) {
            return this.success(!!(await g.commands.set([]).catch(ctx.noop)));
        }
        cmds = Array.isArray(cmds) ? cmds : [cmds];
        const commands = await g.commands.fetch().catch(ctx.noop);
        let success = false;
        for (const cmd of cmds) {
            const command = commands?.find(c => c.name === cmd || c.id === cmd);
            if (command) {
                success = !!(await g.commands.delete(command.id).catch(ctx.noop));
            }
        }
        return this.success(success);
    },
});
//# sourceMappingURL=deleteGuildApplicationCommands.js.map