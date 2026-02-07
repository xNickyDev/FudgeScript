import { Guild } from "discord.js";
import { ArgType, NativeFunction } from "../../structures";
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    type: ArgType.String;
    check: (i: string) => boolean;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.Number;
    check: (i: number) => boolean;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.Guild;
    check: (i: Guild) => boolean;
}], true>;
export default _default;
//# sourceMappingURL=test.d.ts.map