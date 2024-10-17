import { GuildDefaultMessageNotifications } from "discord.js";
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
    type: ArgType.Enum;
    enum: typeof GuildDefaultMessageNotifications;
}], true>;
export default _default;
//# sourceMappingURL=setGuildDefaultMessageNotifications.d.ts.map