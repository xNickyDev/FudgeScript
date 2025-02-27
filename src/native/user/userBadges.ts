import { UserFlags } from "discord.js"
import array from "../../functions/array"
import noop from "../../functions/noop"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$userBadges",
    version: "1.0.0",
    description: "Returns the public badges of a user",
    aliases: ["$userFlags"],
    unwrap: true,
    output: array(UserFlags),
    args: [
        {
            name: "user ID",
            description: "The user to return its badges",
            required: true,
            rest: false,
            type: ArgType.User,
        },
        {
            name: "separator",
            description: "The separator to use for every badge",
            rest: false,
            type: ArgType.String,
        },
    ],
    brackets: false,
    async execute(ctx, [user, sep]) {
        return this.success((user ?? ctx.user)?.flags?.toArray().join(sep ?? ", "))
    },
})