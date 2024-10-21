"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForumTagProperties = exports.ForumTagProperty = void 0;
const discord_js_1 = require("discord.js");
const defineProperties_1 = __importDefault(require("../functions/defineProperties"));
var ForumTagProperty;
(function (ForumTagProperty) {
    ForumTagProperty["emoji"] = "emoji";
    ForumTagProperty["id"] = "id";
    ForumTagProperty["moderated"] = "moderated";
    ForumTagProperty["name"] = "name";
})(ForumTagProperty || (exports.ForumTagProperty = ForumTagProperty = {}));
exports.ForumTagProperties = (0, defineProperties_1.default)({
    emoji: (i) => {
        if (i && "emoji" in i) {
            if (i.emoji?.id) {
                const emoji = (0, discord_js_1.parseEmoji)(i.emoji?.id);
                return `<${emoji?.animated ? "a" : ""}:${emoji?.name}:${emoji?.id}>`;
            }
            else {
                return i.emoji?.name;
            }
        }
        return null;
    },
    id: (i) => i?.id,
    moderated: (i) => i?.moderated,
    name: (i) => i?.name,
});
//# sourceMappingURL=forumTag.js.map