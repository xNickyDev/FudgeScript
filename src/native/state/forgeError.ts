import { ArgType, IForgeError, NativeFunction, Return } from "../../structures"

export enum ForgeErrorData {
    type = "type",
    message = "message",
    function = "function",
    args = "args"
}

export default new NativeFunction({
    name: "$forgeError",
    version: "2.2.0",
    description: "Retrieves data from an event whose context was a forge error event",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            type: ArgType.Enum,
            enum: ForgeErrorData,
            required: true,
        },
        {
            name: "separator",
            description: "The separator to use in case of array",
            rest: false,
            type: ArgType.String,
        },
    ],
    output: ArgType.Unknown,
    execute(ctx, [prop, sep]) {
        return this.successJSON((ctx.runtime.extras as IForgeError)[prop])
    },
})