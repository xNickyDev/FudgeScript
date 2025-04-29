import { ContainerBuilder } from "discord.js"
import { ArgType, IExtendedCompiledFunctionField, NativeFunction, Return } from "../../structures"
import { buildActionRow } from "../../functions/buildActionRow"

export default new NativeFunction({
    name: "$addContainer",
    version: "2.4.0",
    description: "Creates a new component container",
    unwrap: false,
    brackets: true,
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
        ctx.container.insideContainer = true
        ctx.container.components.push(new ContainerBuilder())

        const code = this.data.fields![0] as IExtendedCompiledFunctionField
        const resolved = await this["resolveCode"](ctx, code)
        if (!this["isValidReturnType"](resolved)) return resolved

        buildActionRow(ctx)
        ctx.container.insideContainer = false
        return this.success()
    },
})