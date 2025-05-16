import { ActionRow, BaseChannel, MessageActionRowComponent } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"
import { ComponentProperties, ComponentProperty } from "../../properties/component"
import { MessageFlags } from "discord.js"

export default new NativeFunction({
    name: "$getComponents",
    version: "1.4.0",
    description: "Retrieves data of a component, not providing any property returns component json",
    unwrap: true,
    output: ArgType.Unknown,
    brackets: false,
    aliases: ["$getComponent"],
    args: [
        {
            name: "channel ID",
            description: "The channel to pull message from",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isTextBased(),
        },
        {
            name: "message ID",
            description: "The message to retrieve data from",
            rest: false,
            required: true,
            type: ArgType.Message,
            pointer: 0,
        },
        {
            name: "row index",
            description: "The row index to get data from",
            rest: false,
            required: false,
            type: ArgType.Number,
        },
        {
            name: "component index",
            description: "The component index to get data from",
            rest: false,
            required: false,
            type: ArgType.Number,
        },
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            type: ArgType.Enum,
            enum: ComponentProperty,
            required: false,
        },
        {
            name: "separator",
            description: "The separator to use for each value in case of array",
            rest: false,
            type: ArgType.String,
        },
    ],
    execute(ctx, [, m, rowIndex, compIndex, prop, sep]) {
        m ??= ctx.message!

        if (typeof rowIndex !== "number") {
            return this.successJSON(m?.components.map((x) =>
                m.flags.has(MessageFlags.IsComponentsV2) ? x : (x as ActionRow<MessageActionRowComponent>).components
            ))
        }

        const row = m.components[rowIndex]
        const comps = "components" in row ? row.components : undefined
        const comp = comps?.[compIndex!]

        if (prop === null) {
            return this.successJSON(comp?.data ?? comps)
        }

        return this.success(ComponentProperties[prop](comp ?? row, sep))
    },
})