"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$test",
    version: "1.4.0",
    description: "This is just a test function",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "string",
            description: "The string to test",
            rest: false,
            type: structures_1.ArgType.String,
            default: "Hello World"
        },
        {
            name: "number",
            description: "The number to test",
            rest: false,
            type: structures_1.ArgType.Number,
            default: 5
        },
    ],
    async execute(ctx, [string, number]) {
        console.log("String:", string, "Number:", number);
        return this.success();
    },
});
//# sourceMappingURL=test.js.map