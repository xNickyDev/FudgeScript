/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import parseTargetUsers from "../../functions/parseTargetUsers"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$getInviteTargetUsers",
    version: "2.9.0",
    description: "Gets the target users of an invite",
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
            name: "separator",
            description: "The separator to use for every id",
            rest: false,
            type: ArgType.String
        }
    ],
    output: ArgType.User,
    async execute(ctx, [invite, sep]) {
        const buffer = await invite.fetchTargetUsers().catch(ctx.noop)
        if (!buffer) return this.success()
        return this.success(parseTargetUsers(buffer).join(sep ?? ", "))
    },
})