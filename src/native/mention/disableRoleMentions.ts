import { NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$disableRoleMentions",
    version: "1.3.0",
    description: "Disables all role mentions",
    unwrap: false,
    execute(ctx) {
        const mentions = ctx.container.allowedMentions
        mentions.parse = mentions.parse?.filter((x) => x !== "roles")
        mentions.roles = []
        return this.success()
    },
})