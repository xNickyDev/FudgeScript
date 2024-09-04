import { Guild } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$argType",
    version: "1.5.0",
    description: "Returns the type of the specified argument",
    unwrap: true,
    brackets: true,
    output: ArgType,
    args: [
        {
            name: "arg",
            description: "The argument to get type of",
            required: true,
            rest: false,
            type: ArgType.String,
        },
    ],
    execute(ctx, [arg]) {
        return this.success()
    },
})