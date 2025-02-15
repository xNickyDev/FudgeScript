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
            type: structures_1.ArgType.String,
            description: "The code to execute",
            required: true,
            rest: true
        }
    ],
    output: structures_1.ArgType.String,
    execute(ctx) {
        return this.unsafeSuccess(this.displayFields());
    },
});
//# sourceMappingURL=unescapeCode.js.map