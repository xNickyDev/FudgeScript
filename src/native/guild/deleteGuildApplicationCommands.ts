import { ApplicationCommandDataResolvable } from "discord.js"
import { Arg, ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
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
            type: ArgType.Guild,
        },
        {
            name: "cmds",
            description: "The commands to delete from the guild",
            rest: true,
            type: ArgType.String,
        },
    ],
    output: ArgType.Boolean,
    async execute(ctx, [g, cmds]) {
        g ??= ctx.guild!

        if (!cmds) {
            return this.success(!!(await g.commands.set([]).catch(ctx.noop)))
        }

        cmds = Array.isArray(cmds) ? cmds : [cmds]
        const commands = await g.commands.fetch().catch(ctx.noop)

        let success = false
        for (const cmd of cmds) {
            const command = commands?.find(c => c.name === cmd || c.id === cmd)
            if (command) {
                success = !!(await g.commands.delete(command.id).catch(ctx.noop))
            }
        }

        return this.success(success)
    },
})
