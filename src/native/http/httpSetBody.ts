import { ArgType, NativeFunction } from "../../structures/@internal/NativeFunction"
import { Return } from "../../structures/@internal/Return"

export default new NativeFunction({
    name: "$httpSetBody",
    version: "1.0.0",
    description: "Sets a JSON body for the request",
    args: [
        {
            name: "body",
            description: "the JSON body",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    unwrap: true,
    brackets: true,
    execute(ctx, [json]) {
        ctx.http.body = json
        return this.success()
    },
})
