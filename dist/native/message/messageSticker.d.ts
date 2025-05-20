import { BaseChannel } from "discord.js";
import { ArgType, NativeFunction } from "../../structures";
import { StickerReturnType } from "./messageStickers";
declare const _default: NativeFunction<[{
    name: string;
    rest: false;
    required: true;
    description: string;
    type: ArgType.Channel;
    check: (i: BaseChannel) => boolean;
}, {
    name: string;
    pointer: number;
    description: string;
    rest: false;
    required: true;
    type: ArgType.Message;
}, {
    name: string;
    rest: false;
    required: true;
    description: string;
    type: ArgType.Number;
}, {
    name: string;
    rest: false;
    description: string;
    type: ArgType.Enum;
    enum: typeof StickerReturnType;
}], true>;
export default _default;
//# sourceMappingURL=messageSticker.d.ts.map