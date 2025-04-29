import { ContainerBuilder } from "discord.js"
import { ArgType, IExtendedCompiledFunctionField, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$addContainer",
    version: "2.3.0",
    description: "Creates a new component container",
    unwrap: false,
    brackets: false,
    experimental: true,
    args: [
        {
            name: "components",
            description: "The components to add",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    async execute(ctx) {
        ctx.container.isComponentsV2 = true
        ctx.container.components.push(new ContainerBuilder())

        if (this.hasFields) {
            const code = this.data.fields![0] as IExtendedCompiledFunctionField
            const resolved = await this["resolveCode"](ctx, code)
            if (!this["isValidReturnType"](resolved)) return resolved
        }

        const row = ctx.container.actionRow
        const comp = ctx.container.components.at(-1)
        if (row && comp instanceof ContainerBuilder) {
            comp.addActionRowComponents(row)
            delete ctx.container.actionRow
        }

        return this.success()
    },
})