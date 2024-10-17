import { Channel, Guild, GuildChannel, GuildMember, Invite, Role, User, Webhook } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$typeOf",
    version: "1.5.0",
    description: "Returns the type of the provided argument",
    unwrap: false,
    args: [
        {
            name: "argument",
            rest: false,
            description: "The argument to get its type",
            type: ArgType.String,
            required: true,
        },
    ],
    brackets: true,
    output: ArgType,
    execute(ctx) {
        const arg = this.displayField(0) as any

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