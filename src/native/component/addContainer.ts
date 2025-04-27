import { ContainerBuilder } from "discord.js"
import { ArgType, IExtendedCompiledFunctionField, NativeFunction, Return } from "../../structures"
import { MessageFlags } from "discord.js"

export default new NativeFunction({
    name: "$addContainer",
    version: "2.3.0",
    description: "Adds a new component container",
    brackets: true,
    unwrap: false,
    experimental: true,
    args: [
        {
            name: "components",
            description: "The components to add",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    async execute(ctx) {
        const comp = this.data.fields![0] as IExtendedCompiledFunctionField
        
        const resolved = await this["resolveCode"](ctx, comp)
        if (!this["isValidReturnType"](resolved)) return resolved

        ctx.container.isComponentsV2 = true
        ctx.container.containers.push(resolved.value as ContainerBuilder)
        return this.success()
    },
})