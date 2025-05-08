"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
const array_1 = __importDefault(require("../../functions/array"));
const teamMember_1 = require("../../properties/teamMember");
exports.default = new structures_1.NativeFunction({
    name: "$botOwnerID",
    version: "1.0.0",
    description: "Returns the bot's owner id or team members",
    brackets: false,
    aliases: [
        "$clientOwnerID",
        "$botTeamMembers",
        "$clientTeamMembers"
    ],
    args: [
        {
            name: "return members",
            description: "Whether to return all members",
            rest: false,
            required: false,
            type: structures_1.ArgType.Boolean
        },
        {
            name: "separator",
            description: "The separator to use for every member",
            rest: false,
            type: structures_1.ArgType.String
        },
        {
            name: "property",
            description: "The property of each team member to return",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: teamMember_1.TeamMemberProperty
        }
    ],
    output: [
        (0, array_1.default)(),
        structures_1.ArgType.Unknown
    ],
    unwrap: true,
    async execute(ctx, [returnAll, sep, prop]) {
        if (!ctx.client.application.owner)
            await ctx.client.application.fetch().catch(ctx.noop);
        const owner = ctx.client.application.owner;
        return this.success(owner ? owner instanceof discord_js_1.User ? owner.id : returnAll ? owner.members.map(x => teamMember_1.TeamMemberProperties[prop || teamMember_1.TeamMemberProperty.id](x)).join(sep ?? ", ") : owner.ownerId : null);
    },
});
//# sourceMappingURL=botOwnerID.js.map