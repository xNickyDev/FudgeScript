import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$unescapeCode",
    version: "1.5.0",
    description: "Code inside this function will be executed",
    unwrap: false,
    brackets: true,
    aliases: [
        "$unescape",
        "$nonEscape"
    ],
    args: [
        {
            name: "code",
            description: "The code to execute",
            type: ArgType.String,
            required: true,
            rest: true
        }
    ],
    output: ArgType.Unknown,
    async execute(ctx) {
        const resolved = await this["resolveUnhandledArg"](ctx, 0)
        if (!this["isValidReturnType"](resolved)) return resolved
        return this.unsafeSuccess(Array.isArray(resolved.value) ? resolved.value.slice().join(";") : resolved.value)
    },
})