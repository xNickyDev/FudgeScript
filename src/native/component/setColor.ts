import { ContainerBuilder } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$setColor",
    version: "2.3.0",
    description: "Sets a color for the current container",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "color",
            description: "The color to set",
            rest: false,
            required: true,
            type: ArgType.Color,
        },
    ],
    execute(ctx, [color]) {
        const comp = ctx.container.components.at(-1)
        if (comp instanceof ContainerBuilder) comp.setAccentColor(color)
        return this.success()
    },
})