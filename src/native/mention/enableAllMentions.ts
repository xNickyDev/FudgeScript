import { NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$enableAllMentions",
    version: "2.6.0",
    description: "Enables every possible mention",
    unwrap: false,
    execute(ctx) {
        ctx.container.parseMentions()
        return this.success()
    },
})