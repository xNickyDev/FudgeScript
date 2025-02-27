import noop from "../../functions/noop"
import { ArgType, CompiledFunction, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$findMember",
    version: "1.0.0",
    description: "Finds a member of a guild",
    brackets: true,
    output: ArgType.Member,
    args: [
        {
            name: "guild ID",
            description: "The guild to find the member on",
            type: ArgType.Guild,
            rest: false,
            required: true,
        },
        {
            name: "query",
            description: "The id, mention or name to find",
            rest: false,
            type: ArgType.String,
            required: true,
        },
        {
            name: "return author",
            description: "Returns the current author id if none found",
            rest: false,
            type: ArgType.Boolean,
        },
    ],
    unwrap: true,
    async execute(ctx, [guild, q, rt]) {
        const id = q.replace(/[\\<>@!]/g, '').trim()

        if (CompiledFunction.IdRegex.test(id)) {
            const m = await guild.members.fetch(id).catch(ctx.noop)
            if (m) return this.success(m.id)
        }

        q = q.toLowerCase()

        const query = await guild.members
            .search({
                query: q,
            })
            .catch(ctx.noop)

        return this.success(query && query.size ? query.at(0)?.id : rt ? ctx.user?.id : undefined)
    },
})