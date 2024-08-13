import { isNumber } from "lodash"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$isInteger",
    version: "1.0.0",
    description: "Whether the number is an integer",
    unwrap: true,
    output: ArgType.Boolean,
    args: [
        {
            name: "number",
            description: "The number to check",
            required: true,
            rest: false,
            type: ArgType.String,
        },
    ],
    brackets: true,
    execute(ctx, [n]) {
        const num = typeof n === "number" ? n : parseFloat(n)

        if (isNaN(num) || typeof num !== "number") {
            return this.success(false)
        }
        return this.success(Number.isInteger(num) && Number(num.toFixed(0)) === num)
    },
})