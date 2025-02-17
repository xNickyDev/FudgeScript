import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$setScheduledEventLocation",
    version: "2.2.0",
    description: "Sets the location for the current scheduled event",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "location",
            description: "The location to set",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    output: ArgType.ScheduledEvent,
    async execute(ctx, [location]) {
        ctx.scheduledEvent.entityMetadata ??= {}
        ctx.scheduledEvent.entityMetadata.location = location
        return this.success()
    },
})