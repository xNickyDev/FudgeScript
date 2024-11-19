import { PermissionFlagsBits } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"
import array from "../../functions/array"

export default new NativeFunction({
    name: "$interactionMemberPerms",
    version: "1.5.0",
    description: "Returns the permissions of the member",
    aliases: ["$interactionMemberPermissions"],
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "separator",
            description: "The separator to use for every perm",
            type: ArgType.String,
            rest: false,
        },
    ],
    output: array(PermissionFlagsBits),
    execute(ctx, [sep]) {
        return this.success(ctx.interaction?.memberPermissions?.toArray().join(sep ?? ", "))
    },
})