import { BaseChannel } from "discord.js";
import { ArgType, NativeFunction } from "../../structures";
export declare enum ThreadType {
    Public = "public",
    Private = "private"
}
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
    type: ArgType.Boolean;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.Enum;
    enum: typeof ThreadType;
}], true>;
export default _default;
//# sourceMappingURL=fetchThreads.d.ts.map