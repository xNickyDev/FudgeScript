"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../constants");
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
        try {
            const ms = constants_1.TimeParser.parseToMS(str);
            const time = constants_1.TimeParser.parseToString(ms, {
                and: false,
                limit: undefined,
                separator: ""
            });
            return this.success(time
                .replace("s", "")
                .replace("year", "y")
                .replace("month", "M")
                .replace("week", "w")
                .replace("day", "d")
                .replace("hour", "h")
                .replace("minute", "m")
                .replace("econd", "s"));
        }
        catch (error) {
            return this.success(0);
        }
    },
});
//# sourceMappingURL=parseTime.js.map