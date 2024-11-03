"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reaction_1 = require("../../properties/reaction");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$getMessageReactions",
    version: "1.5.0",
    description: "Retrieves all reactions of a message",
    unwrap: true,
    output: structures_1.ArgType.Unknown,
    brackets: false,
    aliases: ["$getReactions"],
    args: [
        {
            name: "channel ID",
            description: "The channel to pull message from",
            rest: false,
            required: true,
            type: structures_1.ArgType.TextChannel,
        },
        {
            name: "message ID",
            description: "The message to retrieve reactions from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Message,
            pointer: 0,
        },
        {
            name: "property",
            description: "The property of the reactions to return",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: reaction_1.ReactionProperty
        },
        {
            name: "separator",
            description: "The separator to use for each property",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    async execute(ctx, [, message, prop, sep]) {
        const reactions = (message ?? ctx.message)?.reactions.cache;
        return this.successJSON(reactions?.map(reaction => reaction_1.ReactionProperties[prop ? prop : reaction_1.ReactionProperty.emoji](reaction, sep)).join(sep ?? ", "));
    },
});
//# sourceMappingURL=getMessageReactions.js.map