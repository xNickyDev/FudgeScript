import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$createGuildFromTemplate",
    version: "2.3.0",
    description: "Creates a new guild from a template, returns guild id",
    aliases: [
        "$createServerFromTemplate"
    ],
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "template code",
            description: "The code of the template to create guild with",
            rest: false,
            required: true,
            type: ArgType.Template,
        },
        {
            name: "name",
            description: "The name for the guild",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "icon",
            description: "The icon for the guild",
            rest: false,
            type: ArgType.URL,
        },
    ],
    output: ArgType.Guild,
    async execute(ctx, [temp, name, icon]) {
        const guild = await temp.createGuild(
            name || temp.guild?.name || "",
            icon || temp.guild?.iconURL() || undefined
        ).catch(ctx.noop)
        return this.success(guild?.id)
    },
})