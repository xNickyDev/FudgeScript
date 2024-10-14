import { BaseChannel, VoiceChannel } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

export enum VoiceRegionType {
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

export default new NativeFunction({
    name: "$setVoiceRegion",
    version: "1.5.0",
    description: "Sets the region of a voice channel, returns bool",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to set region",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isVoiceBased()
        },
        {
            name: "region",
            description: "The region to set, leave empty to remove a fixed region",
            rest: false,
            type: ArgType.Enum,
            enum: VoiceRegionType
        },
        {
            name: "reason",
            description: "Reason to set the voice region",
            rest: false,
            required: false,
            type: ArgType.String
        }
    ],
    output: ArgType.Boolean,
    async execute(ctx, [voice, region, reason]) {
        return this.success(!!(await (voice as VoiceChannel).setRTCRegion(region || null, reason ?? undefined).catch(ctx.noop)))
    },
})