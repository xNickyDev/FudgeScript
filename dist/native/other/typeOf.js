"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$typeOf",
    version: "1.5.0",
    description: "Returns the type of the provided argument",
    unwrap: false,
    args: [
        {
            name: "argument",
            rest: false,
            description: "The argument to get its type",
            type: structures_1.ArgType.String,
            required: true,
        },
    ],
    brackets: true,
    output: structures_1.ArgType,
    execute(ctx) {
        const arg = this.displayField(0);
        return this.success(arg instanceof discord_js_1.Guild
            ? "Guild"
            : arg instanceof discord_js_1.GuildMember
                ? "Member"
                : arg instanceof discord_js_1.User
                    ? "User"
                    : arg instanceof discord_js_1.Role
                        ? "Role"
                        : arg instanceof discord_js_1.GuildChannel
                            ? "Channel"
                            : arg instanceof discord_js_1.Invite
                                ? "Invite"
                                : arg instanceof discord_js_1.Webhook
                                    ? "Webhook"
                                    : typeof arg === "number"
                                        ? "Number"
                                        : typeof arg === "boolean"
                                            ? "Boolean"
                                            : typeof arg === "object"
                                                ? "Json"
                                                : typeof arg === "string"
                                                    ? "String"
                                                    : "Unknown");
    },
});
//# sourceMappingURL=typeOf.js.map