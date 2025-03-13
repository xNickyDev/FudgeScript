import { IExtendedCompiledFunctionField } from "../../structures"
import { ArgType, NativeFunction } from "../../structures/@internal/NativeFunction"

export default new NativeFunction({
    name: "$localFunction",
    version: "2.3.0",
    description: "Declares a new local function",
    aliases: ["$fn"],
    unwrap: false,
    brackets: true,
    args: [
        {
            name: "name",
            description: "The local function name",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "code",
            description: "The local function code",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "params",
            description: "The local function params",
            rest: true,
            type: ArgType.String,
        },
    ],
    execute(ctx) {
        const [name, code, args] = this.data.fields as [
            string,
            IExtendedCompiledFunctionField,
            string[]
        ]

        ctx.localFunctions.set(name, { code, args })
        return this.success()
    },
})