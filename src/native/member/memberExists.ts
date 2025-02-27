import { ArgType, CompiledFunction, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$memberExists",
    version: "1.0.0",
    description: "Returns whether an member id exists",
    unwrap: true,
    brackets: true,
    output: ArgType.Boolean,
    args: [
        {
            name: "guild ID",
            description: "The guild to check for the member",
            type: ArgType.Guild,
            rest: false,
            required: true,
        },
        {
            name: "member ID",
            description: "The member to check for",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    async execute(ctx, [guild, id]) {
        return this.success(CompiledFunction.IdRegex.test(id) && (await guild.members.fetch(id).catch(() => false)) !== false)
    },
})