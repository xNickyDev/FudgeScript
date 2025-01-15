import { BaseChannel } from "discord.js";
import { ArgType, NativeFunction } from "../../structures";
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    type: ArgType.Channel;
    check: (i: BaseChannel) => i is import("discord.js").VoiceBasedChannel;
}], true>;
export default _default;
//# sourceMappingURL=channelVoiceRegion.d.ts.map