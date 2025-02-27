import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$repeat",
    version: "1.1.0",
    aliases: ["$repeatText"],
    description: "Repeats given text for x times",
    brackets: true,
    unwrap: true,
    output: ArgType.String,
    args: [
        {
            name: "text",
            description: "The text to repeat",
            type: ArgType.String,
            rest: false,
            required: true
        },
        {
            name: "amount",
            rest: false,
            required: true,
            type: ArgType.Number,
            description: "How many times to repeat this text"
        }
    ],
    execute(ctx, [ txt, times ]) {
        return this.success(txt.repeat(times))
    },
})