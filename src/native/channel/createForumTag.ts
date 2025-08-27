import { BaseChannel, GuildForumTagData, ThreadOnlyChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"
import { parseSingleEmoji } from "../../functions/parseSingleEmoji"

export default new NativeFunction({
    name: "$createForumTag",
    version: "2.5.0",
    description: "Creates a forum tag, returns bool",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The forum to create tag on",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isThreadOnly(),
        },
        {
            name: "name",
            description: "The name for the tag",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "emoji",
            description: "The emoji for the tag",
            rest: false,
            type: ArgType.String,
        }
    ],
    output: ArgType.Boolean,
    async execute(ctx, [ channel, name, emoji ]) {
        const forum = channel as ThreadOnlyChannel

        const tag = {
            name,
            emoji: parseSingleEmoji(ctx, emoji),
        } as GuildForumTagData

        return this.success(!!(await forum.setAvailableTags([...forum.availableTags, tag]).catch(ctx.noop)))
    },
})