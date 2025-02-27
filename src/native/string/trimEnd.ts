import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$trimEnd",
    version: "1.0.6",
    description: "Trims at the end of a string",
    brackets: true,
    output: ArgType.String,
    unwrap: true,
    args: [
        {
            name: "text",
            description: "The text to trim at the end",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    execute(ctx, [m]) {
        return this.success(m.trimEnd())
    },
})
