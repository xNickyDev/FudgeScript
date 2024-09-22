"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const invite_1 = require("../../properties/invite");
const array_1 = __importDefault(require("../../functions/array"));
exports.default = new structures_1.NativeFunction({
    name: "$getInviteInfo",
    version: "1.5.0",
    brackets: true,
    description: "Returns information about an invite",
    unwrap: true,
    output: (0, array_1.default)(),
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
//# sourceMappingURL=getInviteInfo.js.map