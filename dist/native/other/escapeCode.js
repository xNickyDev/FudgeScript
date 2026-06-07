"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$escapeCode",
    version: "1.4.0",
    description: "Code inside this function will not be executed",
    unwrap: false,
    brackets: true,
    aliases: [
        "$esc"
    ],
    args: [
        {
            name: "code",
            type: structures_1.ArgType.String,
            description: "The code to ignore",
            required: true,
            rest: false
        }
    ],
    output: structures_1.ArgType.String,
    execute(ctx) {
        const code = this.data.fields[0];
        return this.success(code.functions.map((x) => x.display));
    },
});
//# sourceMappingURL=escapeCode.js.map