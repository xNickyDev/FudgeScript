import { FileBuilder } from "discord.js"
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
        const comp = new FileBuilder().setURL(url).setSpoiler(typeof(spoiler) === "boolean" ? spoiler : undefined)
        ctx.container.containers.at(-1)?.addFileComponents(comp)
        return this.success()
    },
})