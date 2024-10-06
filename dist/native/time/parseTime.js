"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$parseTime",
    version: "1.5.0",
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
        const time = str
            .replaceAll("and", "")
            .replaceAll(",", "")
            .replaceAll(" ", "")
            .replaceAll("s", "")
            .replaceAll("econd", "s")
            .replaceAll("year", "y")
            .replaceAll("month", "M")
            .replaceAll("week", "w")
            .replaceAll("day", "d")
            .replaceAll("hour", "h")
            .replaceAll("minute", "m");
        return this.success(isNaN(Number(time)) ? time : `${time}s`);
    },
});
//# sourceMappingURL=parseTime.js.map