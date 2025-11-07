import { ArgType, NativeFunction } from "../../structures/@internal/NativeFunction"

export default new NativeFunction({
    name: "$jsonAssign",
    version: "2.6.0",
    description: "Combines multiple JSON objects into a single JSON object",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "variable",
            description: "The variable that holds the target object",
            required: true,
            type: ArgType.String,
            rest: false
        },
        {
            name: "objects",
            description: "The objects from which to copy properties",
            type: ArgType.Json,
            required: true,
            rest: true
        }
    ],
    output: ArgType.Json,
    execute(ctx, [ name, objects ]) {
        const json = ctx.getEnvironmentKey(name)
        if (!json) return this.success()
        return this.successJSON(Object.assign(json, ...objects))
    }
})