import array from "../../functions/array"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$authorizingIntegrationOwners",
    version: "1.5.0",
    description: "Returns the authorizing integration owners of this interaction",
    unwrap: false,
    output: array<ArgType.Unknown>(),
    execute(ctx) {
        return this.successJSON(ctx.interaction && "authorizingIntegrationOwners" in ctx.interaction ? ctx.interaction.authorizingIntegrationOwners : undefined)
    },
})