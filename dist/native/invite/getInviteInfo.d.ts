import { ArgType, NativeFunction } from "../../structures";
import { InviteProperty } from "../../properties/invite";
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    required: true;
    type: ArgType.Invite;
}, {
    name: string;
    rest: false;
    type: ArgType.Enum;
    description: string;
    enum: typeof InviteProperty;
}], true>;
export default _default;
//# sourceMappingURL=getInviteInfo.d.ts.map