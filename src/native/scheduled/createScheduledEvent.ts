import { GuildScheduledEventEntityType, GuildScheduledEventPrivacyLevel, GuildScheduledEventRecurrenceRuleOptions } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$createScheduledEvent",
    version: "2.3.0",
    description: "Creates a new scheduled event on a guild, returns event id",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to create scheduled event on",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "name",
            description: "The name of the scheduled event",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "description",
            description: "The description of the scheduled event",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "type",
            description: "The entity type of the scheduled event",
            rest: false,
            required: true,
            type: ArgType.Enum,
            enum: GuildScheduledEventEntityType,
        },
        {
            name: "start",
            description: "The start time of the scheduled event",
            rest: false,
            required: true,
            type: ArgType.Date,
        },
        {
            name: "end",
            description: "The end time of the scheduled event",
            rest: false,
            type: ArgType.Date,
        },
        {
            name: "cover",
            description: "The cover image of the scheduled event",
            rest: false,
            type: ArgType.URL,
        },
        {
            name: "reason",
            description: "The reason for this action",
            rest: false,
            type: ArgType.String,
        },
        
    ],
    output: ArgType.ScheduledEvent,
    async execute(ctx, [guild, name, desc, type, start, end, cover, reason]) {
        const event = await guild.scheduledEvents.create({
            name,
            entityType: type,
            privacyLevel: GuildScheduledEventPrivacyLevel.GuildOnly,
            scheduledStartTime: start,
            scheduledEndTime: end || undefined,
            description: desc || undefined,
            image: cover || undefined,
            channel: ctx.scheduledEvent.channel,
            entityMetadata: ctx.scheduledEvent.entityMetadata,
            recurrenceRule: ctx.scheduledEvent.recurrenceRule as GuildScheduledEventRecurrenceRuleOptions,
            reason: reason || undefined
        }).catch(ctx.noop)

        ctx.clearScheduledEventOptions()

        return this.success(event?.id)
    },
})