import { TimeParser } from "../../constants"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$parseTime",
    description: "Parses valid duration string to time",
    brackets: true,
    output: ArgType.Number,
    args: [
        {
            name: "duration",
            description: "The valid string to convert to ms",
            rest: false,
            type: ArgType.String,
            required: true,
        },
    ],
    unwrap: true,
    execute(ctx, [ str ]) {
        try {
            const ms = TimeParser.parseToMS(str)
            const time = TimeParser.parseToString(ms, {
                and: false,
                limit: undefined,
                separator: ""
            })
            return this.success(
                time
                .replace("s", "")
                .replace("year", "y")
                .replace("month", "M")
                .replace("week", "w")
                .replace("day", "d")
                .replace("hour", "h")
                .replace("minute", "m")
                .replace("econd", "s")
            )
        } catch (error) {
            return this.success(0)
        }
    },
})
