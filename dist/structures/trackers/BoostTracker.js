"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoostTracker = void 0;
const discord_js_1 = require("discord.js");
const CustomEventHandler_1 = require("../extended/CustomEventHandler");
class BoostTracker {
    static Boosts = new discord_js_1.Collection();
    static init(client) {
        client.on("guildMemberUpdate", (oldMember, newMember) => {
            if (!oldMember.premiumSince && newMember.premiumSince) {
                const arr = new Array();
                this.Boosts.set(newMember.guild.id, arr);
            }
        });
        client.on("guildUpdate", async (oldGuild, newGuild) => {
            const oldBoosts = oldGuild.premiumSubscriptionCount ?? 0;
            const newBoosts = newGuild.premiumSubscriptionCount ?? 0;
            if (newBoosts > oldBoosts) {
                CustomEventHandler_1.CustomEventEmitter.emit("guildBoostStart", {
                    guild: newGuild,
                    member: this.Boosts.get(newGuild.id)?.at(-1)?.member
                });
            }
            else if (newBoosts < oldBoosts) {
                CustomEventHandler_1.CustomEventEmitter.emit("guildBoostEnd", {
                    guild: newGuild,
                    member: this.Boosts.get(newGuild.id)?.at(-1)?.member
                });
            }
        });
    }
}
exports.BoostTracker = BoostTracker;
//# sourceMappingURL=BoostTracker.js.map