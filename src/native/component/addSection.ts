import { ArgType, IExtendedCompiledFunctionField, NativeFunction, Return } from "../../structures"
import { buildActionRow } from "../../functions/buildActionRow"
import { ComponentType, ContainerBuilder, SectionBuilder } from "discord.js"
import addButton from "./addButton"
import addTextDisplay from "./addTextDisplay"

export default new NativeFunction({
    name: "$addSection",
    version: "2.4.0",
    description: "Adds a new section component",
    unwrap: false,
    brackets: true,
    args: [
        {
            name: "components",
            description: "The components and accessory to add",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    async execute(ctx) {
        buildActionRow(ctx)
        const comp = ctx.container.components.at(-1)
        ctx.component.section = new SectionBuilder()
        ctx.container.context.push(ComponentType.Section)

        const textDisplay = this.getFunction(0, addTextDisplay)!
        const newButton = this.getFunction(0, addButton)

        const text = await textDisplay?.execute(ctx)
        if (!this["isValidReturnType"](text)) return text

        if (newButton) {
            const button = await newButton.execute(ctx)
            if (!this["isValidReturnType"](button)) return button
        }

        if (comp instanceof ContainerBuilder && ctx.container.isInside(ComponentType.Container))
            comp.addSectionComponents(ctx.component.section)
        else ctx.container.components.push(ctx.component.section)

        delete ctx.component.section
        ctx.container.context.pop()
        return this.success()
    },
})