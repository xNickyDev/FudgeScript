import { MessageReaction } from "discord.js"
import defineProperties from "../functions/defineProperties"

export enum ReactionProperty {
    emoji = "emoji",
    count = "count",
    superCount = "superCount",
    normalCount = "normalCount",
    me = "me",
    meSuper = "meSuper",
    superColors = "superColors",
    users = "users"
}

export const ReactionProperties = defineProperties<typeof ReactionProperty, MessageReaction>({
    emoji: (i) => i?.emoji.toString(),
    count: (i) => i?.count,
    superCount: (i) => i?.countDetails.burst,
    normalCount: (i) => i?.countDetails.normal,
    me: (i) => i?.me,
    meSuper: (i) => i?.meBurst,
    superColors: (i, sep) => i?.burstColors?.join(sep ?? ", "),
    users: (i, sep) => i?.users.cache.map(x => x.id).join(sep ?? ", ")
})