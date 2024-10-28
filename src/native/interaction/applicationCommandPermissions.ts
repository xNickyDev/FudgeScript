import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$applicationCommandPermissions",
    version: "1.5.0",
    description: "Returns an application command's permissions",
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull command from",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "id",
            description: "The id of the command to pull its permissions",
            rest: false,
            required: true,
            pointer: 0,
            type: ArgType.String,
        },
    ],
    output: ArgType.Json,
    unwrap: true,
    async execute(ctx, [g, id]) {
        if (this.hasFields) {
            const guild = g ?? ctx.guild
            return this.successJSON(await guild.commands.permissions.fetch({ command: id }).catch(ctx.noop))
        }

        return this.successJSON(
            ctx.interaction && ctx.interaction.guild && "command" in ctx.interaction
                ? await ctx.interaction.command?.permissions.fetch({ guild: ctx.interaction.guild }).catch(ctx.noop)
                : undefined
        )
    },
})