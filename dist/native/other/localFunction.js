"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NativeFunction_1 = require("../../structures/@internal/NativeFunction");
exports.default = new NativeFunction_1.NativeFunction({
    name: "$localFunction",
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
            type: NativeFunction_1.ArgType.String,
        },
        {
            name: "code",
            description: "The local function code",
            rest: false,
            required: true,
            type: NativeFunction_1.ArgType.String,
        },
        {
            name: "params",
            description: "The local function params",
            rest: true,
            type: NativeFunction_1.ArgType.String,
        },
    ],
    execute(ctx) {
        const [name, code, args] = this.data.fields;
        ctx.localFunctions.set(name, { code, args });
        return this.success();
    },
});
//# sourceMappingURL=localFunction.js.map