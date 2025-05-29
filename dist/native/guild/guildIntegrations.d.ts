import { ArgType, NativeFunction } from "../../structures";
import { IntegrationProperty } from "../../properties/integration";
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
    enum: typeof IntegrationProperty;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.String;
}], true>;
export default _default;
//# sourceMappingURL=guildIntegrations.d.ts.map