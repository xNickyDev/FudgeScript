import { ArgType, NativeFunction } from "../../structures"
import { buildComponent } from "../../functions/componentBuilders"

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
        const components = Array.isArray(json) ? json.map((x) => buildComponent(x)) : new Array(buildComponent(json))

        ctx.container.components.push(...components)

        return this.success()
    },
})