import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$advancedReplace",
    version: "1.5.0",
    aliases: [
        "$advancedReplaceText"
    ],
    output: ArgType.String,
    description: "Replaces text in a string multiple times",
    unwrap: true,
    args: [
        {
            name: "text",
            description: "The base text",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "match;replacement",
            description: "The text to match and their replacement",
            required: true,
            rest: true,
            type: ArgType.String,
        }
    ],
    brackets: true,
    execute(ctx, args) {
        let text = args[0]

        for (let i = 1; i < args.length; i += 2) {
            const match = args[i] as string
            const replacement = args[i + 1] as string
            text = text.replaceAll(match, replacement)
        }

        return this.success(text)
    },
})
