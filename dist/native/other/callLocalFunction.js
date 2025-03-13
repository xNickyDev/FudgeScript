"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NativeFunction_1 = require("../../structures/@internal/NativeFunction");
exports.default = new NativeFunction_1.NativeFunction({
    name: "$callLocalFunction",
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
            type: NativeFunction_1.ArgType.String,
        },
        {
            name: "args",
            description: "The args to call this local function with",
            rest: true,
            type: NativeFunction_1.ArgType.String,
        },
    ],
    output: NativeFunction_1.ArgType.Unknown,
    async execute(ctx, [name, args]) {
        const func = ctx.localFunctions.get(name);
        if (func) {
            const resolved = await this["resolveCode"](ctx, func.code);
            if (!this["isValidReturnType"](resolved))
                return resolved;
            ctx.container.content = resolved.value;
            await ctx.container.send(ctx.obj);
        }
        return this.success();
    },
});
//# sourceMappingURL=callLocalFunction.js.map