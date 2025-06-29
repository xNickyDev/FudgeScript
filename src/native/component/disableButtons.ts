import { ActionRowBuilder, ButtonBuilder, ContainerBuilder, SectionBuilder } from "discord.js"
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

        const disableButton = (btn: any) => {
            if (btn instanceof ButtonBuilder) btn.setDisabled(true)
        }

        const processComponent = (comp: any) => {
            if (comp instanceof ActionRowBuilder) comp.components.forEach(disableButton)
            else if (comp instanceof SectionBuilder) disableButton(comp.accessory)
            else if (comp instanceof ContainerBuilder) comp.components.forEach(processComponent)
        }

        components.forEach(processComponent)
        return this.success()
    },
})