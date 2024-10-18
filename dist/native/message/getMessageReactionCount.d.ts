import { TextBasedChannel } from "discord.js";
import { ArgType, NativeFunction } from "../../structures";
export declare enum ReactionType {
    Normal = "normal",
    Super = "burst"
}
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    required: true;
    type: ArgType.Channel;
    check: (i: TextBasedChannel) => boolean;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.Message;
    pointer: number;
    required: true;
}, {
    name: string;
    description: string;
    required: true;
    rest: false;
    type: ArgType.String;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.Enum;
    enum: typeof ReactionType;
}], true>;
export default _default;
//# sourceMappingURL=getMessageReactionCount.d.ts.map