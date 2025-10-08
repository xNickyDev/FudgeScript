import { ComponentType, LabelBuilder } from "discord.js"
import { ArgType, IExtendedCompiledFunctionField, NativeFunction, Return } from "../../structures"

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
        {
            name: "component",
            description: "The component to attach to the label",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    async execute(ctx) {
        ctx.container.inside.push(ComponentType.Label)

        const { args, return: rt } = await this["resolveMultipleArgs"](ctx, 0, 1)
        if (!this["isValidReturnType"](rt)) return rt
        const [ name, desc ] = args

        const label = new LabelBuilder().setLabel(name)
        if (desc) label.setDescription(desc)
        
        ctx.component.label = label

        const code = this.data.fields![2] as IExtendedCompiledFunctionField
        const resolved = await this["resolveCode"](ctx, code)
        if (!this["isValidReturnType"](resolved)) return resolved

        ctx.container.modal?.addLabelComponents(ctx.component.label)

        delete ctx.component.label
        ctx.container.inside.pop()
        return this.success()
    },
})