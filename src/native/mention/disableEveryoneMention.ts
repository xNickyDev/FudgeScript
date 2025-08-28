import { NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$disableEveryoneMention",
    version: "1.3.0",
    description: "Disables all everyone mentions",
    aliases: ["$disableEveryoneMentions"],
    unwrap: false,
    execute(ctx) {
        ctx.container.unparseMention("everyone")
        return this.success()
    },
})