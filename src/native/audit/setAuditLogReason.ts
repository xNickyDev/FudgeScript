import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$setAuditLogReason",
    version: "2.4.0",
    description: "Sets the reason for audit log entries",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "reason",
            description: "The reason to set",
            rest: false,
            required: true,
            type: ArgType.String
        },
    ],
    async execute(ctx, [reason]) {
        ctx.reason = reason
        return this.success()
    },
})