import { GuildOnboardingPromptType } from "discord.js";
import { ArgType, NativeFunction } from "../../structures";
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    type: ArgType.String;
    required: true;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.Enum;
    enum: typeof GuildOnboardingPromptType;
}], true>;
export default _default;
//# sourceMappingURL=addOnboardingPrompt.d.ts.map