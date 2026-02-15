import { BaseChannel } from "discord.js"
import { ArgType, IExtendedCompiledFunctionConditionField, NativeFunction } from "../../structures"
import isTrue from "../../functions/isTrue"

// NEEDS REWRITE, NOT FINISHED

export default new NativeFunction({
    name: "$awaitReaction",
    version: "2.7.0",
    description: "Awaits a reaction on a message, returns emoji or nothing if no valid response",
    unwrap: false,
    output: ArgType.Message,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to await reaction on",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isTextBased()
        },
        {
            name: "message ID",
            description: "The message to await reaction on",
            rest: false,
            required: true,
            type: ArgType.Message,
            pointer: 0,
        },
        {
            name: "variable name",
            description: "The variable to load the object of the reaction that was added, get it with $env[<variable>]",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "filter",
            description: "The filter to run for every reaction added after this",
            rest: false,
            required: true,
            condition: true,
            type: ArgType.String
        },
        {
            name: "time",
            description: "The max time to wait for a reaction",
            rest: false,
            required: true,
            type: ArgType.Time,
        }
    ],
    async execute(ctx) {
        const filter = this.data.fields![3] as IExtendedCompiledFunctionConditionField
        const { args, return: rt } = await this["resolveMultipleArgs"](ctx, 0, 1, 2, 4)
        if (!this["isValidReturnType"](rt)) return rt
        const [, message, varName, time] = args

        const reaction = await message.awaitReactions({
            errors: ["time"],
            max: 1,
            time,
            filter: async (r) => {
                const obj = { emoji: r.emoji.toString(), user: r.users.cache.last()?.id }
                ctx.setEnvironmentKey(varName, obj)
                const res = await this["resolveCondition"](ctx, filter)
                if (res.return || res.success) {
                    return isTrue(res)
                } else return false
            }
        }).catch(ctx.noop)

        return this.success(reaction)
    },
})