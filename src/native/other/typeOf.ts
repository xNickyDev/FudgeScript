import { Channel, Guild, GuildChannel, GuildMember, Invite, Role, User, Webhook } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$typeOf",
    version: "1.5.0",
    description: "Returns the type of the provided argument",
    unwrap: true,
    args: [
        {
            name: "argument",
            rest: false,
            description: "The argument to get its type",
            type: ArgType.Unknown,
            required: true,
        },
    ],
    brackets: true,
    output: ArgType,
    execute(ctx, [arg]) {
        return this.success(
            arg instanceof Guild
                ? "Guild"
                : arg instanceof GuildMember
                    ? "Member"
                    : arg instanceof User
                        ? "User"
                        : arg instanceof Role
                            ? "Role"
                            : arg instanceof GuildChannel
                                ? "Channel"
                                : arg instanceof Invite
                                    ? "Invite"
                                    : arg instanceof Webhook
                                        ? "Webhook"
                                        : typeof arg === "number"
                                            ? "Number"
                                            : typeof arg === "boolean"
                                                ? "Boolean"
                                                : typeof arg === "object"
                                                    ? "Json"
                                                    : typeof arg === "string"
                                                        ? "String"
                                                        : "Unknown"
        )
    },
})