"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarType = void 0;
const structures_1 = require("../../structures");
var CalendarType;
(function (CalendarType) {
    CalendarType[CalendarType["Day"] = 0] = "Day";
    CalendarType[CalendarType["Week"] = 1] = "Week";
})(CalendarType || (exports.CalendarType = CalendarType = {}));
function getWeekOfYear(date) {
    const yearStart = new Date(date.getFullYear(), 0, 1);
    const yearDays = (date.getTime() - yearStart.getTime()) / 86400000;
    return Math.ceil((yearDays + yearStart.getDay() + 1) / 7);
}
exports.default = new structures_1.NativeFunction({
    name: "$calendar",
    version: "1.5.0",
    description: "Returns a calendar component of the current year",
    unwrap: true,
    output: structures_1.ArgType.Number,
    args: [
        {
            name: "type",
            description: "The type of the calendar year",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: CalendarType,
            required: true,
        },
    ],
    execute(ctx, [type]) {
        const date = new Date();
        return this.success(type === CalendarType.Day
            ? date.getDay()
            : type === CalendarType.Week
                ? getWeekOfYear(date)
                : null);
    }
});
//# sourceMappingURL=calendar.js.map