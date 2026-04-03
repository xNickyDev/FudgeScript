import { LabelBuilder } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$addLabel",
    version: "2.6.0",
    description: "Adds a new label component to the modal",
    unwrap: false,
    brackets: true,
    args: [
        {
            name: "name",
            description: "The name for the label",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "description",
            description: "The description for the label",
            rest: false,
            type: ArgType.String,
        },
    ],
    async execute(ctx) {
        if (!ctx.interaction) return this.success()

        const { args, return: rt } = await this["resolveMultipleArgs"](ctx, 0, 2, 3)
        if (!this["isValidReturnType"](rt)) return rt
        const [ name, desc ] = args

        const label = new LabelBuilder().setLabel(name)
        if (desc) label.setDescription(desc)

        ctx.container.modal?.addLabelComponents(label)

        return this.success()
    },
})