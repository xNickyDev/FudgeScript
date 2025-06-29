import { disableButtons } from "../../functions/components"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$disableButtons",
    version: "2.2.0",
    description: "Disables all buttons on the current message",
    aliases: ["$disableAllButtons"],
    unwrap: true,
    args: [
        {
            name: "index",
            description: "The index of the row to disable",
            rest: false,
            required: true,
            type: ArgType.Number,
        },
    ],
    brackets: false,
    execute(ctx, [index]) {
        const data = ctx.container.components
        const components = Number.isFinite(index) ? new Array(data[index]) : data

        components.forEach(disableButtons)
        return this.success()
    },
})