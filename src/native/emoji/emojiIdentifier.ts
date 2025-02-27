import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$emojiIdentifier",
    version: "1.0.0",
    description: "Returns the emoji identifier",
    brackets: false,
    unwrap: true,
    output: ArgType.String,
    args: [
        {
            name: "emoji ID",
            description: "The emoji id to return its identifier",
            rest: false,
            type: ArgType.Emoji,
            required: true,
        },
    ],
    execute(ctx, [emoji]) {
        return this.success((emoji ?? ctx.emoji)?.identifier)
    },
})