import { GuildScheduledEventEntityType, GuildScheduledEventPrivacyLevel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$createGuildScheduledEvent",
    version: "2.2.0",
    description: "Creates a new scheduled event on a guild, returns event id",
    aliases: [
        "$createScheduledEvent",
        "$createServerScheduledEvent"
    ],
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to create event on",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "name",
            description: "The name of the event",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "description",
            description: "The description of the event",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "entity type",
            description: "The entity type of the event",
            rest: false,
            required: true,
            type: ArgType.Enum,
            enum: GuildScheduledEventEntityType
        },
        {
            name: "start time",
            description: "The start time of the event",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "end time",
            description: "The end time of the event",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "image",
            description: "The cover image of the event",
            rest: false,
            type: ArgType.String,
        },
    ],
    output: ArgType.String,
    async execute(ctx, [guild, name, desc, type, start, end, image]) {
        const event = await guild.scheduledEvents.create({
            name: name,
            description: desc || undefined,
            privacyLevel: GuildScheduledEventPrivacyLevel.GuildOnly,
            entityType: type,
            scheduledStartTime: start,
            scheduledEndTime: end || undefined,
            image: image || undefined
        }).catch(ctx.noop)

        return this.success(event ? event.id : null)
    },
})