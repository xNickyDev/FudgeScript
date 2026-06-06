import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$editRole",
    version: "1.0.7",
    description: "Edits role data, returns boolean",
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
            description: "The role to edit data",
            rest: false,
            required: true,
        },
        {
            name: "role name",
            description: "The new role name, leave empty to not modify",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "role color",
            description: "The new role color, leave empty to not modify",
            rest: false,
            type: ArgType.Color,
        },
        {
            name: "role icon",
            description: "The new role icon, leave empty to not modify",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "hoisted",
            description: "Whether the role is hoisted, leave empty to not modify",
            rest: false,
            type: ArgType.Boolean,
        },
        {
            name: "mentionable",
            description: "Whether the role can be mentioned, leave empty to not modify",
            rest: false,
            type: ArgType.Boolean,
        },
        {
            name: "perms",
            description: "The new perms for the role",
            rest: true,
            type: ArgType.Permission,
        },
    ],
    brackets: true,
    async execute(ctx, [, role, name, color, icon, hoist, mentionable, perms]) {
        const edit = await role.edit({
            name: name || undefined,
            icon: icon || undefined,
            hoist: hoist || undefined,
            mentionable: mentionable || undefined,
            permissions: perms || undefined,
            colors: typeof color === "number" ? { primaryColor: color } : undefined,
            reason: ctx.reason,
        }).catch(ctx.noop)

        ctx.clearAuditLogReason()
        return this.success(!!edit)
    },
})
