import { BaseChannel } from "discord.js";
import { ArgType, NativeFunction } from "../../structures";
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    type: ArgType.Guild;
    required: true;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.Channel;
    check: (i: BaseChannel) => boolean;
    pointer: number;
}], true>;
export default _default;
//# sourceMappingURL=setGuildSafetyAlertsChannel.d.ts.map