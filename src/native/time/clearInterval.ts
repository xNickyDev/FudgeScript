import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$clearInterval",
    version: "2.3.0",
    description: "Clears an active interval",
    aliases: ["$stopInterval"],
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "name",
            description: "The name of the interval",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    execute(ctx, [name]) {
        clearInterval(ctx.client.intervals.get(name))
        ctx.client.intervals.delete(name)
        return this.success()
    },
})