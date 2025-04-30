import { ArgType, NativeFunction, Return } from "../../structures"

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
        return this.success()
    },
})