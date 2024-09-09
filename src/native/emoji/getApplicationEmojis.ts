import { Collection } from "discord.js"
import noop from "../../functions/noop"
import { ApplicationEmojiProperties, ApplicationEmojiProperty } from "../../properties/applicationEmoji"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$getApplicationEmojis",
    version: "1.5.0",
    description: "Gets all application emojis",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "property",
            description: "The property to return for every emoji",
            rest: false,
            type: ArgType.Enum,
            enum: ApplicationEmojiProperty
        },
        {
            name: "separator",
            description: "The separator to use for every emoji property",
            rest: false,
            type: ArgType.String,
        },
    ],
    output: ArgType.Unknown,
    execute(ctx, [prop, sep]) {
        const emojis = ctx.client.application.emojis.cache

        if (!prop) {
            return this.successJSON(emojis)
        }

        return this.success(emojis?.map(emoji => ApplicationEmojiProperties[prop](emoji)).join(sep ?? ", "))
    },
})