import { IntegrationProperties, IntegrationProperty } from "../../properties/integration"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$getGuildIntegration",
    version: "2.4.0",
    description: "Returns an integration of a guild",
    aliases: [
        "$getServerIntegration"
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
            description: "The integration to get",
            rest: false,
            required: true,
            type: ArgType.Integration,
            pointer: 0,
        },
        {
            name: "property",
            description: "The property of the integration to return",
            rest: false,
            type: ArgType.Enum,
            enum: IntegrationProperty
        },
        {
            name: "separator",
            description: "The separator to use in case of array",
            rest: false,
            type: ArgType.String
        },
    ],
    output: [
        ArgType.Json,
        ArgType.Unknown
    ],
    execute(ctx, [, integration, prop, sep ]) {
        if (prop) return this.success(IntegrationProperties[prop](integration, sep))
        return this.successJSON(integration)
    },
})