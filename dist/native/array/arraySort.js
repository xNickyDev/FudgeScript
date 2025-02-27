"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const loop_1 = require("../statement/loop");
exports.default = new structures_1.NativeFunction({
    name: "$arraySort",
    version: "1.2.0",
    description: "Sorts given array",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "variable",
            description: "The variable the array is held on",
            type: structures_1.ArgType.String,
            rest: false,
            required: true,
        },
        {
            name: "other variable",
            description: "The variable to load result to, leave empty to return output",
            rest: false,
            required: false,
            type: structures_1.ArgType.String
        },
        {
            name: "sort type",
            description: "The sort type to use, omit to use default sort order",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: loop_1.SortType
        },
    ],
    output: structures_1.ArgType.Json,
    execute(ctx, [variable, other, order]) {
        const arr = ctx.getEnvironmentInstance(Array, variable);
        if (arr !== null) {
            const sorted = arr.sort(order !== null ? (a, b) => (order ? Number(a) - Number(b) : Number(b) - Number(a)) : undefined);
            if (other)
                ctx.setEnvironmentKey(other, sorted);
            else
                return this.successJSON(sorted);
        }
        return this.success();
    },
});
//# sourceMappingURL=arraySort.js.map