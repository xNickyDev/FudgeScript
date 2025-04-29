import { ActionRow, UserSelectMenuBuilder } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"
import { MentionableSelectMenuBuilder } from "@discordjs/builders"

export default new NativeFunction({
    name: "$addDefaultUserOption",
    version: "1.4.0",
    aliases: [
        "$addDefaultUsers",
        "$addDefaultUserOptions"
    ],
    description: "Adds default user options to the last select menu",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "user IDs",
            description: "The user ids",
            rest: true,
            required: true,
            type: ArgType.String
        }
    ],
    execute(ctx, [ ids ]) {
        const comp = ctx.container.components.at(-1)
        if (comp instanceof ActionRow) {
            const menu = comp.components[0]
            if (menu instanceof UserSelectMenuBuilder || menu instanceof MentionableSelectMenuBuilder) 
                menu.addDefaultUsers(ids)
        }
        return this.success()
    },
})