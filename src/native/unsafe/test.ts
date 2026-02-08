import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$test",
    version: "1.4.0",
    description: "This is just a test function",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "string",
            description: "The string to test",
            rest: false,
            type: ArgType.String,
            default: "Hello World"
        },
        {
            name: "number",
            description: "The number to test",
            rest: false,
            type: ArgType.Number,
            default: 5
        },
    ],
    async execute(ctx, [string, number]) {
        console.log("String:", string, "Number:", number)
        return this.success()
    },
})