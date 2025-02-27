import { ArgType, IExtendedCompiledFunctionField, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$memberCooldown",
    version: "1.5.0",
    description: "Adds a cooldown binded to a guild member and command",
    brackets: true,
    unwrap: false,
    args: [
        {
            name: "guild ID",
            rest: false,
            description: "The guild id to assign the cooldown to",
            type: ArgType.String,
            required: true,
        },
        {
            name: "user ID",
            rest: false,
            description: "The user id to assign the cooldown to",
            type: ArgType.String,
            required: true,
        },
        {
            name: "duration",
            description: "The duration of the cooldown",
            rest: false,
            type: ArgType.Time,
            required: true,
        },
        {
            name: "code",
            description: "The code to execute if the cooldown is active",
            rest: false,
            type: ArgType.String,
        },
    ],
    experimental: true,
    async execute(ctx) {
        const [, , code] = this.data.fields! as IExtendedCompiledFunctionField[]

        const dur = await this["resolveUnhandledArg"](ctx, 2)
        if (!this["isValidReturnType"](dur)) return dur

        const guildId = await this["resolveUnhandledArg"](ctx, 0)
        if (!this["isValidReturnType"](guildId)) return guildId

        const userId = await this["resolveUnhandledArg"](ctx, 1)
        if (!this["isValidReturnType"](userId)) return userId

        const id = ctx.client.cooldowns.identifier(ctx.cmd!.id, "member", guildId.value, userId.value)

        const cooldown = ctx.client.cooldowns.getTimeLeft(id)

        if (cooldown !== 0) {
            const content = await this["resolveCode"](ctx, code)
            if (!this["isValidReturnType"](content)) return content
            ctx.container.content = content.value as string
            await ctx.container.send(ctx.obj)
            return this.stop()
        }

        ctx.client.cooldowns.add(id, dur.value as number)

        return this.success()
    },
})
