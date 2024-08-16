import { BaseChannel, ChannelType, ForumChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"
import { ForumTagProperty, ForumTagProperties } from "../../properties/forumTag"
import array from "../../functions/array"

export default new NativeFunction({
    name: "$forumTags",
    version: "1.5.0",
    description: "Returns all available tags of a forum",
    unwrap: true,
    output: array<ArgType.String>(),
    args: [
        {
            name: "channel ID",
            description: "The channel to get tags of",
            rest: false,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.type === ChannelType.GuildForum,
        },
        {
            name: "property",
            description: "The property to return for every tag",
            rest: false,
            type: ArgType.Enum,
            enum: ForumTagProperty
        },
        {
            name: "separator",
            description: "The separator to use for every tag",
            rest: false,
            type: ArgType.String,
        },
    ],
    brackets: false,
    execute(ctx, [ch, property, sep]) {
        const channel = (ch ?? ctx.channel) as ForumChannel | undefined

        if (!property) {
            return this.successJSON(channel?.availableTags)
        } else {
            return this.success(channel?.availableTags?.map(tag => tag?.[property as ForumTagProperty]).join(sep || ", "))
        }
    },
})