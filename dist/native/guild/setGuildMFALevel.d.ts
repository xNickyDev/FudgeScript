import { GuildMFALevel } from "discord.js";
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
    required: true;
    type: ArgType.Enum;
    enum: typeof GuildMFALevel;
}], true>;
export default _default;
//# sourceMappingURL=setGuildMFALevel.d.ts.map