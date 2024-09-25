import { ArgType, NativeFunction } from "../../structures/@internal/NativeFunction"
import { Return } from "../../structures/@internal/Return"

export default new NativeFunction({
    name: "$httpPing",
    version: "1.5.0",
    description: "Returns the execution time of the HTTP request",
    aliases: ["$httpExecutionTime"],
    unwrap: false,
    execute(ctx) {
        return this.success(ctx.http.response?.ping)
    },
})