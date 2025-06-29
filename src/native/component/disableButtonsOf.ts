import { ArgType, NativeFunction, Return } from "../../structures"
import { buildComponent } from "../../functions/components"
import { ActionRowBuilder, ButtonBuilder, ContainerBuilder, SectionBuilder } from "discord.js"

export default new NativeFunction({
    name: "$disableButtonsOf",
    version: "2.2.0",
    description: "Disables all buttons of a message, returns bool",
    aliases: ["$disableAllButtonsOf"],
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel id to pull message from",
            rest: false,
            required: true,
            type: ArgType.TextChannel
        },
        {
            name: "message ID",
            description: "The message to disable buttons on",
            rest: false,
            required: true,
            type: ArgType.Message,
            pointer: 0
        },
        {
            name: "index",
            description: "The index of the row to disable",
            rest: false,
            type: ArgType.Number,
        },
    ],
    brackets: true,
    output: ArgType.Boolean,
    async execute(ctx, [, msg, index]) {
        const components = msg.components.map(x => buildComponent(x))

        const disableButton = (comp: any) => {
            if (comp instanceof ButtonBuilder) return comp.setDisabled(true)
            return comp
        }

        const processComponent = (comp: any): any => {
            if (comp instanceof ActionRowBuilder) return comp.components.map(disableButton)
            else if (comp instanceof SectionBuilder) return disableButton(comp.accessory)
            else if (comp instanceof ContainerBuilder) return comp.components.map(processComponent)
            else return comp
        }

        const comps = components.map((comp: any, i: number) => {
            if (Number.isFinite(index) && i !== index) return comp
            return processComponent(comp)
        })

        return this.success(!!(await msg.edit({ components: comps.map((x) => x.toJSON()) }).catch(ctx.noop)))
    },
})