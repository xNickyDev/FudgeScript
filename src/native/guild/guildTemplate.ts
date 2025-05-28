import { ArgType, NativeFunction } from "../../structures"
import { TemplateProperty } from "./getGuildTemplate"

export default new NativeFunction({
    name: "$guildTemplate",
    version: "2.4.0",
    description: "Returns the template of a guild",
    unwrap: true,
    brackets: false,
    aliases: [
        "$serverTemplate"
    ],
    args: [
        {
            name: "guild ID",
            description: "The guild to get template from",
            rest: false,
            required: true,
            type: ArgType.Guild
        },
        {
            name: "property",
            description: "The property of the template to return",
            rest: false,
            type: ArgType.Enum,
            enum: TemplateProperty
        },
    ],
    output: [
        ArgType.Json,
        ArgType.Unknown
    ],
    async execute(ctx, [guild, prop]) {
        const template = (await (guild ?? ctx.guild)?.fetchTemplates().catch(ctx.noop))?.first()
        if (!prop) return this.successJSON(template || "")
        return this.success(template?.[prop])
    },
})