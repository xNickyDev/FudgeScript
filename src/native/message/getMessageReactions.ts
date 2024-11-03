import { ReactionProperties, ReactionProperty } from "../../properties/reaction"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$getMessageReactions",
    version: "1.5.0",
    description: "Retrieves all reactions of a message",
    unwrap: true,
    output: ArgType.Unknown,
    brackets: false,
    aliases: ["$getReactions"],
    args: [
        {
            name: "channel ID",
            description: "The channel to pull message from",
            rest: false,
            required: true,
            type: ArgType.TextChannel,
        },
        {
            name: "message ID",
            description: "The message to retrieve reactions from",
            rest: false,
            required: true,
            type: ArgType.Message,
            pointer: 0,
        },
        {
            name: "property",
            description: "The property of the reactions to return",
            rest: false,
            type: ArgType.Enum,
            enum: ReactionProperty
        },
        {
            name: "separator",
            description: "The separator to use for each property",
            rest: false,
            type: ArgType.String,
        },
    ],
    async execute(ctx, [, message, prop, sep]) {
        const reactions = (message ?? ctx.message)?.reactions.cache
        return this.successJSON(reactions?.map(reaction => ReactionProperties[prop ? prop : ReactionProperty.emoji](reaction, sep)).join(sep ?? ", "))
    },
})