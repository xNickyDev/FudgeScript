import { ArgType, NativeFunction } from "../../structures";
import { TeamMemberProperty } from "../../properties/teamMember";
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    required: false;
    type: ArgType.Boolean;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.String;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.Enum;
    enum: typeof TeamMemberProperty;
}], true>;
export default _default;
//# sourceMappingURL=botOwnerID.d.ts.map