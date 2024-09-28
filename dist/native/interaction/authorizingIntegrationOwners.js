"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const array_1 = __importDefault(require("../../functions/array"));
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$authorizingIntegrationOwners",
    description: "Returns the authorizing integration owners of this interaction",
    unwrap: false,
    output: (0, array_1.default)(),
    execute(ctx) {
        return this.success(ctx.interaction && "authorizingIntegrationOwners" in ctx.interaction ? ctx.interaction.authorizingIntegrationOwners : undefined);
    },
});
//# sourceMappingURL=authorizingIntegrationOwners.js.map