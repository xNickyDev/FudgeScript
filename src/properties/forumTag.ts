import { Emoji, GuildForumTag } from "discord.js"
import defineProperties from "../functions/defineProperties"

export enum ForumTagProperty {
    emoji = "emoji",
    id = "id",
    moderated = "moderated",
    name = "name"
}

export const ForumTagProperties = defineProperties<typeof ForumTagProperty, GuildForumTag>({
    emoji: (i) => i?.emoji !== null,
    id: (i) => i?.id,
    moderated: (i) => i?.moderated,
    name: (i) => i?.name,
})
