"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const integration_1 = require("../../properties/integration");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$getGuildIntegration",
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
            type: structures_1.ArgType.Guild,
        },
        {
            name: "integration ID",
            description: "The integration to get",
            rest: false,
            required: true,
            type: structures_1.ArgType.Integration,
            pointer: 0,
        },
        {
            name: "property",
            description: "The property of the integration to return",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: integration_1.IntegrationProperty
        },
        {
            name: "separator",
            description: "The separator to use in case of array",
            rest: false,
            type: structures_1.ArgType.String
        },
    ],
    output: [
        structures_1.ArgType.Json,
        structures_1.ArgType.Unknown
    ],
    execute(ctx, [, integration, prop, sep]) {
        if (prop)
            return this.success(integration_1.IntegrationProperties[prop](integration, sep));
        return this.successJSON(integration);
    },
});
//# sourceMappingURL=getGuildIntegration.js.map