import { AutoModerationRuleTriggerType } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"
import automodActionType from "./automodActionType"

export default new NativeFunction({
    name: "$createAutomodRule",
    version: "1.5.0",
    description: "Creates a new automod rule, returns bool",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to create automod rule on",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "name",
            description: "The name of the automod rule",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "trigger",
            description: "The trigger of the automod rule",
            rest: false,
            required: true,
            type: ArgType.Enum,
            enum: AutoModerationRuleTriggerType
        },
    ],
    output: ArgType.Boolean,
    execute(ctx, [ guild, name, trigger ]) {
        
        return this.success()
    },
})