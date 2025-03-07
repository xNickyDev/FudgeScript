import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$isButton",
    version: "1.0.0",
    description: "Returns whether the interaction is a button",
    unwrap: false,
    output: ArgType.Boolean,
    execute(ctx) {
        return this.success(Boolean(ctx.interaction?.isButton()))
    },
})
