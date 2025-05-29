import { ArgType, NativeFunction } from "../../structures"
import { isTopLevel } from "../../functions/componentBuilders"
import { ActionRowBuilder, ComponentType, createComponentBuilder } from "discord.js"

export default new NativeFunction({
    name: "$loadComponents",
    version: "1.4.0",
    aliases: ["$loadComponent"],
    description: "Loads components JSON (or array) to the response",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "component data",
            type: ArgType.Json,
            rest: false,
            required: true,
            description: "The components object or array of objects to load",
        },
    ],
    execute(ctx, [json]) {
        const components = Array.isArray(json)
            ? Array.isArray(json[0])
                ? json.map((row) => new ActionRowBuilder().addComponents(row?.map((comp: any) => createComponentBuilder(comp))))
                : isTopLevel(json[0]?.type as ComponentType)
                    ? json.map((comp) => createComponentBuilder(comp))
                    : new Array(new ActionRowBuilder().addComponents(json?.map((comp) => createComponentBuilder(comp))))
            : new Array(isTopLevel(json?.type as ComponentType) ? createComponentBuilder(json as any) : new ActionRowBuilder().addComponents(createComponentBuilder(json as any)))

        ctx.container.components.push(...components)

        return this.success()
    },
})