import { ArgType, NativeFunction } from "../../structures";
import { BaseChannel } from "discord.js";
declare const _default: NativeFunction<[{
    name: string;
    rest: false;
    required: true;
    description: string;
    type: ArgType.Channel;
    check: (i: BaseChannel) => boolean;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.Message;
    pointer: number;
    required: true;
}], true>;
export default _default;
//# sourceMappingURL=messageRawData.d.ts.map