import { TeamMember, TeamMemberMembershipState, TeamMemberRole } from "discord.js"
import defineProperties from "../functions/defineProperties"

export enum TeamMemberProperty {
    id = "id",
    role = "role",
    membership = "membership",
}

export const TeamMemberProperties = defineProperties<typeof TeamMemberProperty, TeamMember>({
    id: (i) => i?.id,
    // @ts-ignore
    role: (i) => TeamMemberRole[i?.role!],
    membership: (i) => TeamMemberMembershipState[i?.membershipState!]
})