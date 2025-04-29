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
        ctx.container.section = new SectionBuilder()

        const code = this.data.fields![0] as IExtendedCompiledFunctionField
        const resolved = await this["resolveCode"](ctx, code)
        if (!this["isValidReturnType"](resolved)) return resolved

        if (comp instanceof ContainerBuilder && ctx.container.isInside(ComponentType.Container))
            comp.addSectionComponents(ctx.container.section)
        else ctx.container.components.push(ctx.container.section)

        delete ctx.container.section
        return this.success()
    },
})