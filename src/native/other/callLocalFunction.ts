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
        
        if (func) {
            const resolved = await this["resolveCode"](ctx, func.code)
            if (!this["isValidReturnType"](resolved)) return resolved
            ctx.container.content = resolved.value as string
            await ctx.container.send(ctx.obj)
        }

        return this.success()
    },
})