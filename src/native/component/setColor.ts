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
        ctx.container.containers.at(-1)?.setAccentColor(color)
        return this.success()
    },
})