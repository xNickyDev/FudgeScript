import { ArgType, NativeFunction } from "../../structures";
import { TemplateProperty } from "./getGuildTemplate";
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    required: true;
    type: ArgType.Guild;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.Enum;
    enum: typeof TemplateProperty;
}], true>;
export default _default;
//# sourceMappingURL=guildTemplate.d.ts.map