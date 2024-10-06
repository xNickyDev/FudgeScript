import { TimeParser } from "../../constants"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$parseTime",
    version: "1.5.0",
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
        return this.success(
            str
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
            .replace("minute", "m")
        )
    },
})
