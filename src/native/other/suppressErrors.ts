import { IExtendedCompiledFunctionField } from "../../structures"
import { ArgType, NativeFunction } from "../../structures/@internal/NativeFunction"

export default new NativeFunction({
    name: "$suppressErrors",
    version: "2.3.0",
    description: "Suppresses all function errors for a command",
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
        // not implemented
        const code = this.data.fields![0] as IExtendedCompiledFunctionField
        ctx.suppressErrors = true

        return this.success()
    },
})