import { Guild } from "discord.js"
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
            check: (i: string) => i.length > 2
        },
        {
            name: "number",
            description: "The number to test",
            rest: false,
            type: ArgType.Number,
            check: (i: number) => i >= 0
        },
        {
            name: "guild ID",
            description: "The guild to test",
            rest: false,
            type: ArgType.Guild,
            check: (i: Guild) => i.verified
        }
    ],
    async execute(ctx) {
        return this.success()
    },
})