import { Sticker, StickerPack } from "discord.js";
export declare enum StickerProperty {
    guildID = "guildID",
    name = "name",
    id = "id",
    timestamp = "timestamp",
    url = "url",
    format = "format",
    available = "available",
    tags = "tags",
    sortValue = "sortValue",
    packID = "packID",
    description = "description"
}
export declare const StickerProperties: import("../functions/defineProperties").Properties<typeof StickerProperty, Sticker>;
export declare enum StickerPackProperty {
    id = "id",
    name = "name",
    description = "description",
    timestamp = "timestamp",
    banner = "banner",
    stickers = "stickers",
    coverStickerID = "coverStickerID",
    skuID = "skuID"
}
export declare const StickerPackProperties: import("../functions/defineProperties").Properties<typeof StickerPackProperty, StickerPack>;
//# sourceMappingURL=sticker.d.ts.map