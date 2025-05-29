"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StickerPackProperties = exports.StickerPackProperty = exports.StickerProperties = exports.StickerProperty = void 0;
const discord_js_1 = require("discord.js");
const defineProperties_1 = __importDefault(require("../functions/defineProperties"));
var StickerProperty;
(function (StickerProperty) {
    StickerProperty["guildID"] = "guildID";
    StickerProperty["name"] = "name";
    StickerProperty["id"] = "id";
    StickerProperty["timestamp"] = "timestamp";
    StickerProperty["url"] = "url";
    StickerProperty["format"] = "format";
    StickerProperty["available"] = "available";
    StickerProperty["tags"] = "tags";
    StickerProperty["sortValue"] = "sortValue";
    StickerProperty["packID"] = "packID";
    StickerProperty["description"] = "description";
})(StickerProperty || (exports.StickerProperty = StickerProperty = {}));
exports.StickerProperties = (0, defineProperties_1.default)({
    guildID: (i) => i?.guild?.id,
    id: (i) => i?.id,
    name: (i) => i?.name,
    url: (i) => i?.url,
    timestamp: (i) => i?.createdTimestamp,
    format: i => discord_js_1.StickerFormatType[i?.format],
    available: i => i?.available,
    description: i => i?.description,
    tags: (i, sep) => i?.tags,
    sortValue: i => i?.sortValue,
    packID: i => i?.packId
});
var StickerPackProperty;
(function (StickerPackProperty) {
    StickerPackProperty["id"] = "id";
    StickerPackProperty["name"] = "name";
    StickerPackProperty["description"] = "description";
    StickerPackProperty["timestamp"] = "timestamp";
    StickerPackProperty["banner"] = "banner";
    StickerPackProperty["stickers"] = "stickers";
    StickerPackProperty["coverStickerID"] = "coverStickerID";
    StickerPackProperty["skuID"] = "skuID";
})(StickerPackProperty || (exports.StickerPackProperty = StickerPackProperty = {}));
exports.StickerPackProperties = (0, defineProperties_1.default)({
    id: (i) => i?.id,
    name: (i) => i?.name,
    description: (i) => i?.description,
    timestamp: (i) => i?.createdTimestamp,
    banner: (i) => i?.bannerURL(),
    stickers: (i, sep) => i?.stickers.map((x) => x.id).join(sep ?? ", "),
    coverStickerID: (i) => i?.coverStickerId,
    skuID: (i) => i?.skuId
});
//# sourceMappingURL=sticker.js.map