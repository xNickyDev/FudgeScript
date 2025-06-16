import { Collection, GuildMember } from "discord.js"
import { ForgeClient } from "../../core"
import { CustomEventEmitter } from "../extended/CustomEventHandler"

export interface IGuildBoost {
    member: GuildMember
}

export class BoostTracker {
    public static readonly Boosts = new Collection<string, IGuildBoost[]>()

    private static init(client: ForgeClient) {
        client.on("guildMemberUpdate", (oldMember, newMember) => {
            if (!oldMember.premiumSince && newMember.premiumSince) {
                const arr = new Array<IGuildBoost>()
                this.Boosts.set(newMember.guild.id, arr)
            }
        })

        client.on("guildUpdate", async (oldGuild, newGuild) => {
            const oldBoosts = oldGuild.premiumSubscriptionCount ?? 0
            const newBoosts = newGuild.premiumSubscriptionCount ?? 0
            
            if (newBoosts > oldBoosts) {
                CustomEventEmitter.emit("guildBoostStart", {
                    guild: newGuild,
                    member: this.Boosts.get(newGuild.id)?.at(-1)?.member
                })
            } else if (newBoosts < oldBoosts) {
                CustomEventEmitter.emit("guildBoostEnd", {
                    guild: newGuild,
                    member: this.Boosts.get(newGuild.id)?.at(-1)?.member
                })
            }
        })
    }
}