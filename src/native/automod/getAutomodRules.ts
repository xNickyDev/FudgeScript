import { ArgType, NativeFunction, Return } from "../../structures"
import { AutomodRuleProperty, AutomodRuleProperties } from "../../properties/automodRule"

export default new NativeFunction({
    name: "$getAutomodRuleNames",
    version: "1.5.0",
    description: "Returns all automod rules of a guild",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to get automod rules from",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "property",
            description: "The property of each automod rule to return",
            rest: false,
            required: false,
            type: ArgType.Enum,
            enum: AutomodRuleProperty
        },
        {
            name: "separator",
            description: "The separator to use for each property",
            rest: false,
            required: false,
            type: ArgType.String,
        },
    ],
    output: ArgType.Boolean,
    execute(ctx, [ guild, prop, sep ]) {
        const rules = guild.autoModerationRules.cache

        if (!prop) {
            return this.success(rules)
        }

        return this.success(rules?.map(rule => AutomodRuleProperties[prop](rule)).join(sep ?? ", "))
    },
})