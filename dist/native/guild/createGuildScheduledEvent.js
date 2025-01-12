"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$createGuildScheduledEvent",
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
            type: structures_1.ArgType.Guild,
        },
        {
            name: "name",
            description: "The name of the event",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "description",
            description: "The description of the event",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "entity type",
            description: "The entity type of the event",
            rest: false,
            required: true,
            type: structures_1.ArgType.Enum,
            enum: discord_js_1.GuildScheduledEventEntityType
        },
        {
            name: "start time",
            description: "The start time of the event",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "end time",
            description: "The end time of the event",
            rest: false,
            type: structures_1.ArgType.String,
        },
        {
            name: "image",
            description: "The cover image of the event",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    output: structures_1.ArgType.String,
    async execute(ctx, [guild, name, desc, type, start, end, image]) {
        const event = await guild.scheduledEvents.create({
            name: name,
            description: desc || undefined,
            privacyLevel: discord_js_1.GuildScheduledEventPrivacyLevel.GuildOnly,
            entityType: type,
            scheduledStartTime: start,
            scheduledEndTime: end || undefined,
            image: image || undefined
        }).catch(ctx.noop);
        return this.success(event ? event.id : null);
    },
});
//# sourceMappingURL=createGuildScheduledEvent.js.map