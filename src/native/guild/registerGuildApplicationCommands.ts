import { ApplicationCommandDataResolvable } from "discord.js"
import { Arg, ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
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
            type: ArgType.Guild,
        },
        {
            name: "cmds",
            description: "The commands to register to the guild",
            rest: true,
            type: ArgType.String,
        },
    ],
    output: ArgType.Boolean,
    async execute(ctx, [g, cmds]) {
        g ??= ctx.guild!

        if (!cmds || cmds.length === 0) {
            return this.success(!!(await ctx.client.applicationCommands.registerGuild(g)?.catch(ctx.noop)))
        }

        cmds = Array.isArray(cmds) ? cmds : [cmds]
        const commands = await g.commands.fetch().catch(ctx.noop)

        let success = false
        for (const cmd of cmds) {
            const command = commands?.find(c => c.name === cmd || c.id === cmd)
            if (command) {
                const appCmd = command.toJSON()
                success = !!(await g.commands.create(appCmd as ApplicationCommandDataResolvable).catch(ctx.noop))
            }
        }

        return this.success(success)
    },
})