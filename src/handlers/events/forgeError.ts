import { Interpreter } from "../../core"
import { CustomEventHandler } from "../../structures/extended/CustomEventHandler"

export default new CustomEventHandler({
    name: "forgeError",
    version: "2.2.0",
    description: "This event is fired when a custom forge error is thrown",
    listener: function (err) {
        const commands = this.commands.get("forgeError")
        if (commands.length) {
            for (const command of commands) {
                Interpreter.run({
                    client: this,
                    command,
                    data: command.compiled.code,
                    obj: {},
                    extras: err,
                })
            }
        }
    },
})