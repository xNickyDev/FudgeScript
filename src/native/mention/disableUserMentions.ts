import { NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$disableUserMentions",
    version: "1.3.0",
    description: "Disables all user mentions",
    unwrap: false,
    execute(ctx) {
        const mentions = ctx.container.allowedMentions
        mentions.parse = mentions.parse?.filter((x) => x !== "users")
        mentions.users = []
        return this.success()
    },
})