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

        try {
            void JSON.parse(arg)
            return this.success("object")
        } catch (error) {
            return this.success(
                !!arg && !isNaN(Number(arg))
                    ? "number"
                    : (arg === "true" || arg === "false")
                        ? "boolean"
                        : BigIntFormatRegex.test(arg)
                            ? "bigint"
                            : "string"
            )
        }
    },
})