"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const invite_1 = require("../../properties/invite");
exports.default = new structures_1.NativeFunction({
    name: "$getInvite",
    version: "1.5.0",
    brackets: true,
    description: "Returns information about an invite",
    unwrap: true,
    output: structures_1.ArgType.Unknown,
    args: [
        {
            name: "code",
            description: "The invite code",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "property",
            rest: false,
            required: true,
            type: structures_1.ArgType.Enum,
            description: "The property of the invite to return",
            enum: invite_1.InviteProperty
        },
    ],
    async execute(ctx, [code, prop]) {
        const invite = await ctx.client.fetchInvite(code).catch(ctx.noop);
        return this.success(invite ? invite_1.InviteProperties[prop](invite) : null);
    },
});
//# sourceMappingURL=getInvite.js.map