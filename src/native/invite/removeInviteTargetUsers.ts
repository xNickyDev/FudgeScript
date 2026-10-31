/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import parseTargetUsers from "../../functions/parseTargetUsers"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$removeInviteTargetUsers",
    version: "2.9.0",
    description: "Removes target users from an existing invite",
    aliases: ["$removeInviteTargetUser"],
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
            description: "The users to remove from the invite",
            rest: true,
            required: true,
            type: ArgType.User
        }
    ],
    async execute(ctx, [invite, users]) {
        const buffer = await invite.fetchTargetUsers().catch(ctx.noop)

        if (buffer) {
            const existing = parseTargetUsers(buffer)
            const ids = new Set(users.map((x) => x.id))
            await invite.updateTargetUsers(
                existing.filter((id) => !ids.has(id))
            ).catch(ctx.noop)
        }

        return this.success()
    },
})