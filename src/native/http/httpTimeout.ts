import { IExtendedCompiledFunctionField } from "../../structures"
import { ArgType, NativeFunction } from "../../structures/@internal/NativeFunction"

export default new NativeFunction({
    name: "$httpTimeout",
    version: "2.3.0",
    description: "Sets an HTTP request timeout, stops execution if request took longer than specified time",
    unwrap: false,
    brackets: true,
    args: [
        {
            name: "time",
            description: "The time to wait until the request times out",
            rest: false,
            type: ArgType.Time,
            required: true,
        },
        {
            name: "code",
            description: "The code to execute if request timed out",
            rest: false,
            type: ArgType.String,
        },
    ],
    async execute(ctx) {
        const code = this.data.fields![1] as IExtendedCompiledFunctionField

        const time = await this["resolveUnhandledArg"](ctx, 0)
        if (!this["isValidReturnType"](time)) return time

        ctx.http.timeout = {
            time: time.value as number,
            code: code || undefined
        }

        return this.success()
    },
})