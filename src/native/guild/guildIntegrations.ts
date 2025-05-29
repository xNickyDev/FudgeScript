import { ArgType, NativeFunction, Return } from "../../structures"
import array from "../../functions/array"
import { IntegrationProperties, IntegrationProperty } from "../../properties/integration"

export default new NativeFunction({
    name: "$guildIntegrations",
    version: "2.4.0",
    description: "Returns all integrations of a guild",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to get integrations from",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "property",
            description: "The property of each integration to return",
            rest: false,
            type: ArgType.Enum,
            enum: IntegrationProperty
        },
        {
            name: "separator",
            description: "The separator to use for each property",
            rest: false,
            type: ArgType.String,
        },
    ],
    output: [
        ArgType.Json,
        array<ArgType.Unknown>()
    ],
    async execute(ctx, [ guild, prop, sep ]) {
        const integrations = await (guild ?? ctx.guild)?.fetchIntegrations().catch(ctx.noop)
        if (integrations && prop) return this.success(integrations.map((x) => IntegrationProperties[prop](x)).join(sep ?? ", "))
        return this.successJSON(integrations)
    },
})