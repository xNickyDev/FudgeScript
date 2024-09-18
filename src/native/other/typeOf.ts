import { ArgType, NativeFunction, Return } from "../../structures"
import lodash from "lodash"

export default new NativeFunction({
    name: "$typeOf",
    version: "1.5.0",
    description: "Returns the type of the provided argument",
    unwrap: true,
    args: [
        {
            name: "argument",
            rest: false,
            description: "The argument to get its type",
            type: ArgType.String,
            required: true,
        },
    ],
    brackets: true,
    output: ArgType,
    execute(ctx, [arg]) {
        return this.success(lodash.capitalize(typeof (arg as any)))
    },
})