import { ArgType, NativeFunction, Return } from "../../structures"
import lodash from "lodash"

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
            required: true,
        },
        {
            name: "color",
            rest: false,
            description: "The color of the horse",
            type: ArgType.Color,
            required: true,
        },
    ],
    brackets: true,
    output: ArgType.Emoji,
    execute(ctx, [name, color]) {
        const horses = ["🐴","🐎","🎠","🏇"]
        return this.success(horses[Math.floor(Math.random() * horses.length)])
    },
})