import { RawUserData } from "discord.js/typings/rawDataTypes"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$userRawData",
    version: "1.5.0",
    description: "Returns the raw data of a user",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "user ID",
            description: "The user to get raw data from",
            rest: false,
            type: ArgType.User,
            required: true,
        },
    ],
    output: ArgType.Json,
    async execute(ctx, [user]) {
        user ??= ctx.user!
        const raw = await ctx.client.rest.get(`/users/${user.id}`) as RawUserData
        
        return this.successJSON(raw)
    },
})