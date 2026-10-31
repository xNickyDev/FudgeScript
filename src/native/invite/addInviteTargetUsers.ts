/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import parseTargetUsers from "../../functions/parseTargetUsers"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$addInviteTargetUsers",
    version: "2.9.0",
    description: "Adds target users to an existing invite",
    aliases: ["$addInviteTargetUser"],
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
            name: "users",
            description: "The users to add to the invite",
            rest: true,
            required: true,
            type: ArgType.User
        }
    ],
    async execute(ctx, [invite, users]) {
        const buffer = await invite.fetchTargetUsers().catch(ctx.noop)

        if (buffer) {
            await invite.updateTargetUsers([
                ...parseTargetUsers(buffer),
                ...users
            ]).catch(ctx.noop)
        }

        return this.success()
    },
})