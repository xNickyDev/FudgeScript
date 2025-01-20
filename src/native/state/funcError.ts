import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$funcError",
    version: "2.2.0",
    description: "Retrieves data from an event whose context was a function error event",
    brackets: true,
    unwrap: true,
    output: ArgType.Unknown,
    args: [
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            type: ArgType.String,
            required: true,
        },
        {
            name: "separator",
            description: "The separator to use in case of array",
            rest: false,
            type: ArgType.String,
        },
    ],
    execute(ctx, [prop, sep]) {
        return this.successJSON(ctx.runtime.extras)
    },
})