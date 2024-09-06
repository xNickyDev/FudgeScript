import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$guildHasTemplates",
    version: "1.5.0",
    description: "Returns whether this guild has any templates",
    unwrap: true,
    brackets: false,
    aliases: [
        "$hasGuildTemplates"
    ],
    args: [
        {
            name: "guild ID",
            description: "The guild to check for templates",
            rest: false,
            required: true,
            type: ArgType.Guild
        },
    ],
    output: ArgType.Boolean,
    async execute(ctx, [guild]) {
        return this.success((await (guild ?? ctx.guild).fetchTemplates()).size > 0)
    },
})