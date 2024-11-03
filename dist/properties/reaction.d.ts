import { MessageReaction } from "discord.js";
export declare enum ReactionProperty {
    emoji = "emoji",
    count = "count",
    superCount = "superCount",
    normalCount = "normalCount",
    me = "me",
    meSuper = "meSuper",
    superColors = "superColors"
}
export declare const ReactionProperties: import("../functions/defineProperties").Properties<typeof ReactionProperty, MessageReaction>;
//# sourceMappingURL=reaction.d.ts.map