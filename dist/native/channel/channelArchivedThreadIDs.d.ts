import { BaseChannel } from "discord.js";
import { ArgType, NativeFunction } from "../../structures";
import { ThreadType } from "./channelThreadIDs";
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    type: ArgType.Channel;
    required: true;
    check: (i: BaseChannel) => boolean;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.Enum;
    enum: typeof ThreadType;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.String;
}], true>;
export default _default;
//# sourceMappingURL=channelArchivedThreadIDs.d.ts.map