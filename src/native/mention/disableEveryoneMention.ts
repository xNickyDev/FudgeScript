import { NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$disableEveryoneMention",
    version: "1.3.0",
    description: "Disables all everyone mentions",
    aliases: ["$disableEveryoneMentions"],
    unwrap: false,
    execute(ctx) {
        const mentions = ctx.container.allowedMentions
        mentions.parse = mentions.parse?.filter((x) => x !== "everyone")
        return this.success()
    },
})