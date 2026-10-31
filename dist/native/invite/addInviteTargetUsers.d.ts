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
    rest: true;
    required: true;
    type: ArgType.User;
}], true>;
export default _default;
//# sourceMappingURL=addInviteTargetUsers.d.ts.map