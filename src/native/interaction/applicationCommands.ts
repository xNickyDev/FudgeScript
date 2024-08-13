import noop from "../../functions/noop"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$applicationCommands",
    version: "1.5.0",
    description: "Returns all application commands of your app",
    brackets: false,
    output: ArgType.Json,
    unwrap: true,
    async execute(ctx) {
        const commands = await ctx.client.application.commands.fetch().catch(ctx.noop)

        return this.successJSON(commands)
    },
})
