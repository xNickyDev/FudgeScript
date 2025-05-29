import { Sticker, StickerFormatType, StickerPack } from "discord.js"
import defineProperties from "../functions/defineProperties"

export enum StickerProperty {
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

export const StickerProperties = defineProperties<typeof StickerProperty, Sticker>({
    guildID: (i) => i?.guild?.id,
    id: (i) => i?.id,
    name: (i) => i?.name,
    url: (i) => i?.url,
    timestamp: (i) => i?.createdTimestamp,
    format: i => StickerFormatType[i?.format!],
    available: i => i?.available,
    description: i => i?.description,
    tags: (i, sep) => i?.tags,
    sortValue: i => i?.sortValue,
    packID: i => i?.packId
})

export enum StickerPackProperty {
    id = "id",
    name = "name",
    description = "description",
    timestamp = "timestamp",
    banner = "banner",
    stickers = "stickers",
    coverStickerID = "coverStickerID",
    skuID = "skuID",
}

export const StickerPackProperties = defineProperties<typeof StickerPackProperty, StickerPack>({
    id: (i) => i?.id,
    name: (i) => i?.name,
    description: (i) => i?.description,
    timestamp: (i) => i?.createdTimestamp,
    banner: (i) => i?.bannerURL(),
    stickers: (i, sep) => i?.stickers.map((x) => x.id).join(sep ?? ", "),
    coverStickerID: (i) => i?.coverStickerId,
    skuID: (i) => i?.skuId
})