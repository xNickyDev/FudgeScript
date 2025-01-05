"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$deleteField",
    description: "Deletes an embed field, returns true if the field was successfully deleted",
    unwrap: true,
    args: [
        {
            name: "field index",
            description: "The index field to delete",
            rest: false,
            required: true,
            type: structures_1.ArgType.Number
        },
        {
            name: "index",
            description: "The index to delete this field on",
            rest: false,
            type: structures_1.ArgType.Number,
        },
    ],
    brackets: true,
    execute(ctx, [fieldIndex, index]) {
        const fields = ctx.container.embed(index ?? 0).data.fields;
        return this.success(fields?.splice(fieldIndex, 1).length === 1);
    },
});
//# sourceMappingURL=deleteField.js.map