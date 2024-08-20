import { AutoModerationRuleTriggerType } from "discord.js";
import { ArgType, NativeFunction } from "../../structures";
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
    required: true;
    type: ArgType.String;
}, {
    name: string;
    description: string;
    rest: false;
    required: true;
    type: ArgType.Enum;
    enum: typeof AutoModerationRuleTriggerType;
}], true>;
export default _default;
//# sourceMappingURL=createAutomodRule.d.ts.map