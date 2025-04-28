import { ContainerBuilder, FileBuilder } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$addFile",
    version: "2.3.0",
    description: "Adds a new file component to the current container",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "url",
            description: "The url of the file",
            rest: false,
            required: true,
            type: ArgType.URL,
        },
        {
            name: "spoiler",
            description: "Whether to set a spoiler",
            rest: false,
            type: ArgType.Boolean,
        },
    ],
    execute(ctx, [url, spoiler]) {
        const comp = ctx.container.components.at(-1)

        const row = ctx.container.actionRow
        if (row && comp instanceof ContainerBuilder) {
            comp.addActionRowComponents(row)
            delete ctx.container.actionRow
        }
        
        if (comp instanceof ContainerBuilder) {
            const file = new FileBuilder().setURL(url).setSpoiler(typeof(spoiler) === "boolean" ? spoiler : undefined)
            comp.addFileComponents(file)
        }
        return this.success()
    },
})