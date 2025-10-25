import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$input",
    version: "1.0.0",
    description: "Returns a value from a modal field",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "custom ID",
            description: "The custom id to get the field value",
            rest: false,
            type: ArgType.String,
            required: true,
        },
        {
            name: "separator",
            description: "The separator to use in case of array",
            rest: false,
            type: ArgType.String,
        },
    ],
    output: ArgType.String,
    async execute(ctx, [id, sep]) {
        if (!ctx.interaction?.isModalSubmit()) return this.success()
        const field = ctx.interaction.fields.getField(id)

        // temp workaround
        const files = ctx.interaction.fields.getUploadedFiles(id)?.map((x) => x.url)

        return this.success(
            "value" in field
                ? field.value
                : "values" in field
                    ? field.values.join(sep ?? ", ")
                    : files?.join(sep ?? ", ")
        )
    },
})