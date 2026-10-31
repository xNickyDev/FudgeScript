import { InviteTargetUsersJobStatusProperty } from "../../properties/invite";
import { ArgType, NativeFunction } from "../../structures";
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    type: ArgType.Invite;
    required: true;
    rest: false;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.Enum;
    enum: typeof InviteTargetUsersJobStatusProperty;
}], true>;
export default _default;
//# sourceMappingURL=getInviteTargetUsersJobStatus.d.ts.map