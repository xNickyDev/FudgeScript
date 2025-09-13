import { ArgType, IExtendedCompiledFunctionField, NativeFunction, Return } from "../../structures"

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
        const code = this.data.fields![0] as IExtendedCompiledFunctionField
        return await this["resolveCode"](ctx, code)
    },
})