import { ComponentType, ContainerBuilder } from "discord.js"
import { ArgType, IExtendedCompiledFunctionField, NativeFunction, Return } from "../../structures"
import { buildActionRow } from "../../functions/buildActionRow"

export default new NativeFunction({
    name: "$addContainer",
    version: "2.4.0",
    description: "Adds a new container component",
    unwrap: false,
    brackets: true,
    args: [
        {
            name: "components",
            description: "The components to add",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "color",
            description: "The color to set",
            rest: false,
            type: ArgType.Color,
        },
        {
            name: "spoiler",
            description: "Whether to set a spoiler",
            rest: false,
            type: ArgType.Boolean,
        },
        {
            name: "id",
            description: "The id for this container component",
            rest: false,
            type: ArgType.Number,
        },
    ],
    async execute(ctx) {
        buildActionRow(ctx)
        ctx.container.components.push(new ContainerBuilder())
        ctx.container.context.push(ComponentType.Container)
        const comp = ctx.container.components.at(-1) as ContainerBuilder

        const color = await this["resolveUnhandledArg"](ctx, 1)
        if (!this["isValidReturnType"](color)) return color
        if (color) comp.setAccentColor(color.value as number)

        const spoiler = await this["resolveUnhandledArg"](ctx, 2)
        if (!this["isValidReturnType"](spoiler)) return spoiler
        if (spoiler) comp.setSpoiler(spoiler.value as boolean)

        const id = await this["resolveUnhandledArg"](ctx, 3)
        if (!this["isValidReturnType"](id)) return id
        if (id) comp.setId(id.value as number)

        const code = this.data.fields![0] as IExtendedCompiledFunctionField
        const resolved = await this["resolveCode"](ctx, code)
        if (!this["isValidReturnType"](resolved)) return resolved

        buildActionRow(ctx)
        ctx.container.context.pop()
        return this.success()
    },
})