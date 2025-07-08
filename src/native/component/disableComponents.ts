import { ActionRowBuilder, ButtonBuilder, MessageActionRowComponentBuilder, SectionBuilder } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$disableComponents",
    version: "2.2.0",
    description: "Disables all components on the current message",
    aliases: ["$disableAllComponents"],
    unwrap: false,
    execute(ctx) {
        const components = ctx.container.components

        for (let comp of components) {
            if (!("components" in comp)) continue

            if (comp instanceof ActionRowBuilder) {
                comp.setComponents(comp.components.map((x: MessageActionRowComponentBuilder) => x.setDisabled(true)))
            } else if (comp instanceof SectionBuilder && comp.accessory instanceof ButtonBuilder) {
                comp.setButtonAccessory(comp.accessory.setDisabled(true))
            }
        }

        return this.success()
    },
})