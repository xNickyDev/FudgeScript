import { IExtendedCompiledFunctionField } from "../../structures"
import { ArgType, NativeFunction } from "../../structures/@internal/NativeFunction"
import { Return } from "../../structures/@internal/Return"

export default new NativeFunction({
    name: "$httpTimeout",
    version: "1.5.0",
    description: "Sets an HTTP request timeout, stops execution if request took longer than specified time",
    unwrap: false,
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
    brackets: true,
    async execute(ctx) {
        return this.stop()
    },
})