import { isBoolean, isNumber, isObject } from "lodash"
import { ArgType, NativeFunction, Return } from "../../structures"

export const BigIntFormatRegex = /^\d+n$/

export default new NativeFunction({
    name: "$typeof",
    version: "2.4.0",
    description: "Returns the type of the provided argument",
    unwrap: true,
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
    execute(ctx, [arg]) {
        let type

        if (isBoolean(arg)) type = "boolean"
        else if (BigIntFormatRegex.test(arg)) type = "bigint"
        else if (isNumber(arg)) type = "number"
        else if (isObject(arg)) type = "object"
        else type = "string"

        return this.success(type)
    },
})