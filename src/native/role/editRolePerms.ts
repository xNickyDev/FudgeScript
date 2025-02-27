import noop from "../../functions/noop"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$editRolePerms",
    version: "1.0.7",
    description: "Edits a role's perms, returns boolean",
    aliases: ["$modifyRolePerms"],
    unwrap: true,
    output: ArgType.Boolean,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull the role from",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "role ID",
            pointer: 0,
            type: ArgType.Role,
            description: "The role to edit perms for",
            rest: false,
            required: true,
        },
        {
            name: "perms",
            description: "The new perms for the role",
            rest: true,
            type: ArgType.Permission,
            required: true,
        },
    ],
    brackets: true,
    async execute(ctx, [, role, perms]) {
        return this.success(!!(await role.setPermissions(perms).catch(ctx.noop)))
    },
})
