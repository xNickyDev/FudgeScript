import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$emoji",
    version: "1.0.0",
    description: "Formats given emoji",
    brackets: false,
    unwrap: true,
    output: ArgType.String,
    args: [
        {
            name: "emoji ID",
            description: "The emoji id to format",
            rest: false,
            type: ArgType.Emoji,
            required: true,
        },
    ],
    execute(ctx, [emoji]) {
        return this.success((emoji ?? ctx.emoji)?.toString())
    },
})