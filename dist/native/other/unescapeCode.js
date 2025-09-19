"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$unescapeCode",
    version: "1.5.0",
    description: "Code inside this function will be executed",
    unwrap: false,
    brackets: true,
    aliases: [
        "$unescape",
        "$nonEscape"
    ],
    args: [
        {
            name: "code",
            description: "The code to execute",
            type: structures_1.ArgType.String,
            required: true,
            rest: true
        }
    ],
    output: structures_1.ArgType.Unknown,
    async execute(ctx) {
        const code = this.data.fields[0];
        const resolved = await this["resolveCode"](ctx, code);
        if (!resolved.success)
            return resolved;
        const value = resolved.value;
        return this.success(value.split(";"));
    },
});
//# sourceMappingURL=unescapeCode.js.map