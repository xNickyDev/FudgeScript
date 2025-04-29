import { ContainerBuilder, TextDisplayBuilder } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"
import { buildActionRow } from "../../functions/buildActionRow"

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
        buildActionRow(ctx)
        const comp = ctx.container.components.at(-1)
        const text = new TextDisplayBuilder().setContent(content)

        if (comp instanceof ContainerBuilder && ctx.container.insideContainer) comp.addTextDisplayComponents(text)
        else ctx.container.components.push(text)

        return this.success()
    },
})