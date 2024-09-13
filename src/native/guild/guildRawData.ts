import { RawGuildData } from "discord.js/typings/rawDataTypes"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$guildRawData",
    version: "1.5.0",
    description: "Returns the raw data of a guild",
    aliases: [
        "$serverRawData"
    ],
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to get raw data from",
            rest: false,
            type: ArgType.Guild,
            required: true,
        },
    ],
    output: ArgType.Json,
    async execute(ctx, [guild]) {
        guild ??= ctx.guild!
        const raw = await ctx.client.rest.get(`/guilds/${guild.id}`) as RawGuildData
        
        return this.successJSON(raw)
    },
})