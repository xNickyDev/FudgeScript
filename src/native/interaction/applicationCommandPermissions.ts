import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$applicationCommandPermissions",
    version: "1.5.0",
    description: "Returns an application command permissions in JSON format",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "id",
            description: "The id of the command to pull its permissions",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    output: ArgType.Json,
    async execute(ctx, [id]) {
        if (this.hasFields) {
            const command = await ctx.client.application.commands.fetch(id).catch(ctx.noop)
            return this.successJSON(command ? command.permissions : undefined)
        }

        return this.successJSON(ctx.interaction && "command" in ctx.interaction ? ctx.interaction.command?.permissions : undefined)
    },
})