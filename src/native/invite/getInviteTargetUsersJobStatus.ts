/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { InviteTargetUsersJobStatusProperties, InviteTargetUsersJobStatusProperty } from "../../properties/invite"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$getInviteTargetUsersJobStatus",
    version: "2.9.0",
    description: "Gets the status of the job processing target users of an invite",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "code",
            description: "The code of the invite",
            type: ArgType.Invite,
            required: true,
            rest: false
        },
        {
            name: "property",
            description: "The property to return",
            rest: false,
            type: ArgType.Enum,
            enum: InviteTargetUsersJobStatusProperty
        }
    ],
    output: [
        ArgType.Json,
        ArgType.Unknown
    ],
    async execute(ctx, [invite, prop]) {
        const status = await invite.fetchTargetUsersJobStatus().catch(ctx.noop)
        if (status && prop) return this.success(InviteTargetUsersJobStatusProperties[prop](status))
        return this.successJSON(status)
    },
})