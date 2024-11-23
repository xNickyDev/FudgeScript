"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
const array_1 = __importDefault(require("../../functions/array"));
exports.default = new structures_1.NativeFunction({
    name: "$interactionAppPerms",
    version: "1.5.0",
    description: "Returns the permissions of the app",
    aliases: ["$interactionAppPermissions"],
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "separator",
            description: "The separator to use for every perm",
            type: structures_1.ArgType.String,
            rest: false,
        },
    ],
    output: (0, array_1.default)(discord_js_1.PermissionFlagsBits),
    execute(ctx, [sep]) {
        return this.success(ctx.interaction?.appPermissions.toArray().join(sep ?? ", "));
    },
});
//# sourceMappingURL=interactionAppPerms.js.map