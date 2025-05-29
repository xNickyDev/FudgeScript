import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$deleteGuildIntegration",
    version: "2.4.0",
    description: "Deletes an integration from a guild, returns bool",
    aliases: [
        "$deleteServerIntegration"
    ],
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to fetch integration from",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "integration ID",
            description: "The integration to delete",
            rest: false,
            required: true,
            type: ArgType.Integration,
            pointer: 0,
        },
        {
            name: "reason",
            description: "The reason for deleting this integration",
            rest: false,
            type: ArgType.String
        },
    ],
    output: ArgType.Boolean,
    async execute(ctx, [, integration, reason]) {
        return this.success(!!(await integration.delete(reason || undefined).catch(ctx.noop)))
    },
})