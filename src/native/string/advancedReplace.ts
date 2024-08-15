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
            name: "match",
            description: "Text to match in base",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "new value",
            description: "The text to replace matches with",
            type: ArgType.String,
            rest: false,
            required: true,
        },
    ],
    brackets: true,
    execute(ctx, [text, ...args]) {
        for (let i = 0; i < args.length; i += 2) {
            const match = args[i] as string
            const replacement = args[i + 1] as string
            text = text.replaceAll(match, replacement)
        }

        return this.success(text)
    },
})
