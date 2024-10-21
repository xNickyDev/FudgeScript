import { GuildForumTag, parseEmoji } from "discord.js"
import defineProperties from "../functions/defineProperties"

export enum ForumTagProperty {
    emoji = "emoji",
    id = "id",
    moderated = "moderated",
    name = "name"
}

export const ForumTagProperties = defineProperties<typeof ForumTagProperty, GuildForumTag>({
    emoji: (i) => {
        if (i && "emoji" in i) {
            if (i.emoji?.id) {
                const emoji = parseEmoji(i.emoji?.id)
                return `<${emoji?.animated ? "a" : ""}:${emoji?.name}:${emoji?.id}>`
            } else {
                return i.emoji?.name
            }
        }
        return null
    },
    id: (i) => i?.id,
    moderated: (i) => i?.moderated,
    name: (i) => i?.name,
})