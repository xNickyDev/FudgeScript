"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgeErrorData = void 0;
const structures_1 = require("../../structures");
var ForgeErrorData;
(function (ForgeErrorData) {
    ForgeErrorData["type"] = "type";
    ForgeErrorData["message"] = "message";
    ForgeErrorData["function"] = "function";
    ForgeErrorData["args"] = "args";
})(ForgeErrorData || (exports.ForgeErrorData = ForgeErrorData = {}));
exports.default = new structures_1.NativeFunction({
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
            type: structures_1.ArgType.Enum,
            enum: ForgeErrorData,
            required: true,
        },
        {
            name: "separator",
            description: "The separator to use in case of array",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    output: structures_1.ArgType.Unknown,
    execute(ctx, [prop, sep]) {
        return this.successJSON(ctx.runtime.extras[prop]);
    },
});
//# sourceMappingURL=forgeError.js.map