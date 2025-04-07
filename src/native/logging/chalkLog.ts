import { ArgType, NativeFunction } from "../../structures"
import chalk from "chalk"

export default new NativeFunction({
    name: "$chalkLog",
    version: "2.3.0",
    description: "Logs colored text to the console using Chalk",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "color",
            description: "The log color (e.g., red, green, blue)",
            type: ArgType.String,
            required: true,
            rest: false
        },
        {
            name: "text",
            description: "The text to log",
            type: ArgType.String,
            required: true,
            rest: false
        }
    ],
    execute(ctx, [color, value]) {
        const fn = (chalk as any)[color]
        console.log(fn(value))
        return this.success()
    }
})