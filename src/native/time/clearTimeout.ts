import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$clearTimeout",
    version: "2.3.0",
    description: "Clears an active timeout",
    aliases: ["$stopTimeout"],
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "name",
            description: "The name of the timeout",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    execute(ctx, [name]) {
        clearTimeout(ctx.client.timeouts.get(name))
        ctx.client.timeouts.delete(name)
        return this.success()
    },
})