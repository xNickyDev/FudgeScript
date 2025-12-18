import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$horse",
    version: "1.5.0",
    description: "Creates a new horse, returns horse",
    unwrap: true,
    args: [
        {
            name: "name",
            rest: false,
            description: "The name of the horse",
            type: ArgType.String,
            default: "Amadeus",
            required: false,
        },
        {
            name: "color",
            rest: false,
            description: "The color of the horse",
            type: ArgType.Color,
            required: false,
        },
    ],
    brackets: false,
    output: ArgType.Emoji,
    execute(ctx, [name, color]) {
        const horses = ["🐴","🐎","🎠","🏇"]
        return this.success(name + horses[Math.floor(Math.random() * horses.length)])
    },
})