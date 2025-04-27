import { ContainerBuilder } from "discord.js"
import { ArgType, IExtendedCompiledFunctionField, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$addContainer",
    version: "2.3.0",
    description: "Adds a new component container",
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
        const comp = this.data.fields![0] as IExtendedCompiledFunctionField

        ctx.container.isComponentsV2 = true
        ctx.container.containers.push(new ContainerBuilder())

        if (comp) {
            const resolved = await this["resolveCode"](ctx, comp)
            if (!this["isValidReturnType"](resolved)) return resolved
        }

        return this.success()
    },
})