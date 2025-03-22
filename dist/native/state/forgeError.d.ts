import { ArgType, NativeFunction } from "../../structures";
export declare enum ForgeErrorData {
    type = "type",
    function = "func",
    message = "msg",
    args = "args"
}
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    type: ArgType.Enum;
    enum: typeof ForgeErrorData;
    required: true;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.String;
}], true>;
export default _default;
//# sourceMappingURL=forgeError.d.ts.map