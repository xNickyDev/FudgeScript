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
        .replaceAll("minute", "m")

        return this.success(isNaN(Number(time)) ? time : `${time}s`)
    },
})
