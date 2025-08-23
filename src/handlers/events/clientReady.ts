import { Interpreter } from "../../core"
import { Logger } from "../../structures"
import { DiscordEventHandler } from "../../structures/extended/DiscordEventHandler"
import { InviteTracker } from "../../structures/trackers/InviteTracker"

export default new DiscordEventHandler({
    name: "clientReady",
    version: "1.0.1",
    description: "This event is fired when the bot becomes ready",
    deprecated: true,
    listener: async function () {
        const commands = [...(this.commands.get("ready"), this.commands.get("clientReady"))]
        if (commands.length) {
            for (const command of commands) {
                Interpreter.run({
                    client: this,
                    command,
                    data: command.compiled.code,
                    obj: {},
                })
            }

            if (commands.some(x => x.type === "ready")) {
                Logger.deprecated(
                    `The "ready" event is deprecated and will be removed with the next major release of discord.js, please use "clientReady" instead.`
                )
            }
        } else {
            Logger.info(`Ready on client ${this.user.displayName}`)
        }

        if (this.options.trackers?.invites) {
            await InviteTracker.cacheAll(this)
        }
    },
})
