"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$parseTime",
    description: "Parses valid duration string to time",
    brackets: true,
    output: structures_1.ArgType.Number,
    args: [
        {
            name: "duration",
            description: "The valid string to convert to ms",
            rest: false,
            type: structures_1.ArgType.String,
            required: true,
        },
    ],
    unwrap: true,
    execute(ctx, [str]) {
        return this.success(str
            .replace("and", "")
            .replace(",", "")
            .replace(" ", "")
            .replace("s", "")
            .replace("econd", "s")
            .replace("year", "y")
            .replace("month", "M")
            .replace("week", "w")
            .replace("day", "d")
            .replace("hour", "h")
            .replace("minute", "m"));
    },
});
//# sourceMappingURL=parseTime.js.map