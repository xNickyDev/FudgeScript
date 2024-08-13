import { BaseChannel, ChannelType, ForumChannel, ThreadChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"
import noop from "../../functions/noop"

export default new NativeFunction({
    name: "$modifyForumTags",
    version: "1.5.0",
    aliases: ["$modifyPostTags"],
    description: "Modifies tags of a forum post, returns bool",
    unwrap: true,
    output: ArgType.Boolean,
    args: [
        {
            name: "channel ID",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isThread(),
            description: "The post to edit tags on",
        },
        {
            name: "tags",
            description: "The tags for the post",
            rest: true,
            required: true,
            type: ArgType.String,
        }
    ],
    brackets: true,
    async execute(ctx, [channel, tags]) {
        const forum = channel as ThreadChannel

        return this.success(!!(await forum.setAppliedTags([...forum.appliedTags, ...tags]).catch(ctx.noop)))
    },
})
