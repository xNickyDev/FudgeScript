import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$deleteField",
    version: "2.1.0",
    description: "Deletes an embed field, returns true if the field was successfully deleted",
    unwrap: true,
    args: [
        {
            name: "field index",
            description: "The index field to delete",
            rest: false,
            required: true,
            type: ArgType.Number
        },
        {
            name: "index",
            description: "The index to delete this field on",
            rest: false,
            type: ArgType.Number,
        },
    ],
    brackets: true,
    execute(ctx, [fieldIndex, index]) {
        const fields = ctx.container.embed(index ?? 0).data.fields
        return this.success(fields?.splice(fieldIndex, 1).length === 1)
    },
})