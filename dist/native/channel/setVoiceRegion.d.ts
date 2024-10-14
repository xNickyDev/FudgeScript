import { BaseChannel } from "discord.js";
import { ArgType, NativeFunction } from "../../structures";
export declare enum VoiceRegionType {
    brazil = "brazil",
    hongkong = "hongkong",
    india = "india",
    japan = "japan",
    rotterdam = "rotterdam",
    russia = "russia",
    singapore = "singapore",
    southKorea = "south-korea",
    southAfrica = "southafrica",
    sydney = "sydney",
    usCentral = "us-central",
    usEast = "us-east",
    usSouth = "us-south",
    usWest = "us-west"
}
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    required: true;
    type: ArgType.Channel;
    check: (i: BaseChannel) => boolean;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.Enum;
    enum: typeof VoiceRegionType;
}, {
    name: string;
    description: string;
    rest: false;
    required: false;
    type: ArgType.String;
}], true>;
export default _default;
//# sourceMappingURL=setVoiceRegion.d.ts.map