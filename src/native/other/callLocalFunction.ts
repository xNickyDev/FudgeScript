import { ErrorType } from "../../structures"
import { ArgType, NativeFunction } from "../../structures/@internal/NativeFunction"

export default new NativeFunction({
    name: "$callLocalFunction",
    version: "2.3.0",
    description: "Calls a local function",
    aliases: ["$callFn"],
    unwrap: true,
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
            name: "args",
            description: "The args to call this local function with",
            rest: true,
            type: ArgType.String,
        },
    ],
    output: ArgType.Unknown,
    async execute(ctx, [name, args]) {
        const func = ctx.localFunctions.get(name)
        if (!func) return this.error(ErrorType.UnknownXName, "local function", name)
        
        if (args.length < func.args.length)
            return this.error(
                ErrorType.Custom,
                `Calling local function ${name} requires ${func.args.length} arguments, received ${args.length}`
            )

        for (let i = 0, len = func.args.length; i < len; i++) {
            ctx.setEnvironmentKey(func.args[i], args[i])
        }

        const exec = await this["resolveCode"](ctx, func.code)
        if (!this["isValidReturnType"](exec)) return exec
        else if (exec.return) return this.success(exec.value)
        else return exec
    },
})