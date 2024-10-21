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
        const emoji = i?.emoji ? parseEmoji(i?.emoji?.id ?? i?.emoji?.name!) : null
        return (emoji?.id ? `<${emoji.animated ? "a" : ""}:${emoji.name}:${emoji.id}>` : emoji?.name)
    },
    id: (i) => i?.id,
    moderated: (i) => i?.moderated,
    name: (i) => i?.name,
})