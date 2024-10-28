import { Interpreter } from "../../core"
import { DiscordEventHandler } from "../../structures/extended/DiscordEventHandler"

export default new DiscordEventHandler({
    name: "applicationCommandPermissionsUpdate",
    version: "1.5.0",
    description: "This event is fired when permissions of an application command are updated",
    listener: async function (c) {
        const commands = this.commands.get("applicationCommandPermissionsUpdate")

        for (const command of commands) {
            Interpreter.run({
                obj: c,
                command,
                client: this,
                data: command.compiled.code,
                args: [],
            })
        }
    },
})