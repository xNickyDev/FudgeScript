import { ArgType, CompiledFunction, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$findGuildEmoji",
    version: "1.0.0",
    description: "Finds an emoji of a guild",
    brackets: true,
    output: ArgType.GuildEmoji,
    args: [
        {
            name: "guild ID",
            description: "The guild to find the emoji on",
            type: ArgType.Guild,
            rest: false,
            required: true,
        },
        {
            name: "query",
            description: "The id, format or emoji name to find",
            rest: false,
            type: ArgType.String,
            required: true,
        },
    ],
    unwrap: true,
    execute(ctx, [guild, q]) {
        if (CompiledFunction.IdRegex.test(q)) {
            const e = guild.emojis.cache.get(q)
            if (e) return this.success(e.id)
        }

        return this.success(
            guild.emojis.cache.find((x) => x.id === q || x.name?.toLowerCase() === q.toLowerCase() || x.toString() === q)?.id
        )
    },
})
