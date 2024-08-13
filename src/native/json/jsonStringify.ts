import { stringify } from "querystring"
import { ArgType, NativeFunction } from "../../structures/@internal/NativeFunction"
import { Return } from "../../structures/@internal/Return"
import { allowedNodeEnvironmentFlags } from "process"

export default new NativeFunction({
    name: "$jsonStringify",
    version: "1.5.0",
    output: ArgType.Json,
    description: "Returns the JSON in stringified format",
    args: [
        {
            name: "key",
            description: "The key to return its value",
            required: true,
            type: ArgType.String,
            rest: true,
        },
        {
            name: "spaces",
            description: "The spaces to use for formatting",
            required: false,
            type: ArgType.Number,
            rest: false
        }
    ],
    brackets: true,
    unwrap: true,
    execute(ctx, [args, spaces]) {
        return this.successJSON(JSON.stringify(ctx.getEnvironmentKey(...args)))
    },
})