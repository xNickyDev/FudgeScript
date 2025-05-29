"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const array_1 = __importDefault(require("../../functions/array"));
const integration_1 = require("../../properties/integration");
exports.default = new structures_1.NativeFunction({
    name: "$guildIntegrations",
    description: "Returns all integrations of a guild",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to get integrations from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
        {
            name: "property",
            description: "The property of each integration to return",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: integration_1.IntegrationProperty
        },
        {
            name: "separator",
            description: "The separator to use for each property",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    output: [
        structures_1.ArgType.Json,
        (0, array_1.default)()
    ],
    async execute(ctx, [guild, prop, sep]) {
        const integrations = await (guild ?? ctx.guild)?.fetchIntegrations().catch(ctx.noop);
        if (integrations && prop)
            return this.success(integrations.map((x) => integration_1.IntegrationProperties[prop](x)).join(sep ?? ", "));
        return this.successJSON(integrations);
    },
});
//# sourceMappingURL=guildIntegrations.js.map