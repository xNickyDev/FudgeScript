import { BaseChannel, ForumChannel, MediaChannel, NewsChannel, TextChannel } from "discord.js";
import { ArgType, NativeFunction } from "../../structures";
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    required: true;
    type: ArgType.Channel;
    check: (i: BaseChannel) => i is NewsChannel | TextChannel | ForumChannel | MediaChannel;
    pointerProperty: string;
}, {
    name: string;
    description: string;
    rest: false;
    required: true;
    type: ArgType.String;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.String;
}], true>;
export default _default;
//# sourceMappingURL=setWelcomeScreenChannel.d.ts.map