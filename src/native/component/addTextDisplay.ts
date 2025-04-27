import { TextDisplayBuilder } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$addTextDisplay",
    version: "2.3.0",
    description: "Adds a new text display component to the current container",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "content",
            description: "The content of this text display",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    execute(ctx, [content]) {
        const comp = new TextDisplayBuilder().setContent(content)
        ctx.container.containers.at(ctx.container.containers.length)?.addTextDisplayComponents(comp)
        return this.success()
    },
})