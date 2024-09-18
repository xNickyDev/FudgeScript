"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const lodash_1 = __importDefault(require("lodash"));
exports.default = new structures_1.NativeFunction({
    name: "$typeOf",
    version: "1.5.0",
    description: "Returns the type of the provided argument",
    unwrap: true,
    args: [
        {
            name: "argument",
            rest: false,
            description: "The argument to get its type",
            type: structures_1.ArgType.String,
            required: true,
        },
    ],
    brackets: true,
    output: structures_1.ArgType,
    execute(ctx, [arg]) {
        return this.success(lodash_1.default.capitalize(typeof arg));
    },
});
//# sourceMappingURL=typeOf.js.map