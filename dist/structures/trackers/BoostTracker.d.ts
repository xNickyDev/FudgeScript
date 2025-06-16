import { Collection, GuildMember } from "discord.js";
export interface IGuildBoost {
    member: GuildMember;
}
export declare class BoostTracker {
    static readonly Boosts: Collection<string, IGuildBoost[]>;
    private static init;
}
//# sourceMappingURL=BoostTracker.d.ts.map