import { ArgType, NativeFunction, Return } from "../../structures"

export const BigIntFormatRegex = /^\d+n$/

export default new NativeFunction({
    name: "$typeOf",
    version: "2.3.0",
    description: "Returns the type of the provided argument",
    unwrap: false,
    brackets: true,
    args: [
        {
            name: "argument",
            rest: false,
            description: "The argument to get its type",
            type: ArgType.String,
            required: true,
        },
    ],
    output: ArgType.String,
    execute(ctx) {
        const arg = this.displayField(0)

        if (!!arg && !isNaN(Number(arg))) return this.success("number")
        if (arg === "true" || arg === "false") return this.success("boolean")
        if (BigIntFormatRegex.test(arg)) return this.success("bigint")

        try {
            void JSON.parse(arg)
            return this.success("object")
        } catch (error) {
            return this.success("string")
        }
    },
})