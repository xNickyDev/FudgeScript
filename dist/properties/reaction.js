"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionProperties = exports.ReactionProperty = void 0;
const defineProperties_1 = __importDefault(require("../functions/defineProperties"));
var ReactionProperty;
(function (ReactionProperty) {
    ReactionProperty["emoji"] = "emoji";
    ReactionProperty["count"] = "count";
    ReactionProperty["superCount"] = "superCount";
    ReactionProperty["normalCount"] = "normalCount";
    ReactionProperty["me"] = "me";
    ReactionProperty["meSuper"] = "meSuper";
    ReactionProperty["superColors"] = "superColors";
    ReactionProperty["users"] = "users";
})(ReactionProperty || (exports.ReactionProperty = ReactionProperty = {}));
exports.ReactionProperties = (0, defineProperties_1.default)({
    emoji: (i) => i?.emoji.toString(),
    count: (i) => i?.count,
    superCount: (i) => i?.countDetails.burst,
    normalCount: (i) => i?.countDetails.normal,
    me: (i) => i?.me,
    meSuper: (i) => i?.meBurst,
    superColors: (i, sep) => i?.burstColors?.join(sep ?? ", "),
    users: (i, sep) => i?.users.cache.map(x => x.id).join(sep ?? ", ")
});
//# sourceMappingURL=reaction.js.map