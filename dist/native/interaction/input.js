"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
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
            type: structures_1.ArgType.String,
            required: true,
        },
        {
            name: "separator",
            description: "The separator to use in case of array",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    output: structures_1.ArgType.String,
    execute(ctx, [id, sep]) {
        if (!ctx.interaction?.isModalSubmit())
            return this.success();
        const field = ctx.interaction.fields.getField(id);
        // temp workaround
        return this.success("value" in field
            ? field.value
            : "values" in field
                ? field.values.join(sep ?? ", ")
                : ctx.interaction.fields.getUploadedFiles(id)?.map((x) => x.url).join(sep ?? ", "));
    },
});
//# sourceMappingURL=input.js.map