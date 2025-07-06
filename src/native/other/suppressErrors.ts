import { IExtendedCompiledFunctionField } from "../../structures"
import { ArgType, NativeFunction } from "../../structures/@internal/NativeFunction"

export default new NativeFunction({
    name: "$suppressErrors",
    version: "2.4.0",
    description: "Suppresses all forge errors for a command",
    unwrap: false,
    brackets: false,
    args: [
        {
            name: "code",
            description: "The code to execute in case of error",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    execute(ctx) {
        ctx.runtime.suppressErrors = true
        // not implemented
        const code = this.data.fields![0] as IExtendedCompiledFunctionField

        return this.success()
    },
})