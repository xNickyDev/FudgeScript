import { GuildScheduledEventEntityType, GuildScheduledEventPrivacyLevel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$deleteGuildScheduledEvent",
    version: "2.2.0",
    description: "Deletes a scheduled event from a guild, returns bool",
    aliases: [
        "$deleteScheduledEvent",
        "$deleteServerScheduledEvent"
    ],
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to delete scheduled event from",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "event ID",
            description: "The scheduled event to delete",
            rest: false,
            required: true,
            type: ArgType.ScheduledEvent,
            pointer: 0
        },
    ],
    output: ArgType.Boolean,
    async execute(ctx, [guild, event]) {
        try {
            await guild.scheduledEvents.delete(event)
        } catch (error) {
            ctx.noop(error)
            return this.success(false)
        }
        return this.success(true)
    },
})