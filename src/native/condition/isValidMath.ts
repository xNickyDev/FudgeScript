import { ArgType, NativeFunction, Return } from "../../structures"
import { MathRegex } from "../math/math"

export default new NativeFunction({
    name: "$isValidMath",
    version: "2.4.0",
    description: "Checks whether given math expression is valid",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "expr",
            description: "The math expression to check for",
            rest: false,
            type: ArgType.String,
            required: true,
        },
    ],
    output: ArgType.Boolean,
    execute(ctx, [expr]) {
        return this.success(MathRegex.test(expr))
    },
})