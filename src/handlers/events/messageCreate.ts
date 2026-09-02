import { Interpreter } from "../../core/Interpreter"
import { DiscordEventHandler } from "../../structures/extended/DiscordEventHandler"

export default new DiscordEventHandler({
    name: "messageCreate",
    version: "1.0.1",
    description: "This event is fired when someone sends a message",
    listener: async function (message) {
        const prefix = await this.getPrefix(message)

        const args = message.content
            .trim()
            .slice(prefix?.length ?? 0)
            .trim()
            .split(/ +/g)
        const rawName = prefix ? args.shift() : args[0]

        const commands = this.commands.get("messageCreate").filter((cmd) => {
            const ignoreCase = cmd.data.nameCaseInsensitive !== false
            const name = ignoreCase ? rawName?.toLowerCase() : rawName
            const cmdName = ignoreCase ? cmd.name?.toLowerCase() : cmd.name
            const aliases = ignoreCase ? cmd.data.aliases?.map((x) => x.toLowerCase()) : cmd.data.aliases

            // Allow always execute commands
            return !cmd.name || (
                // Check if it matches the command name or one of aliases
                (cmdName === name || !!aliases?.includes(name!)) &&
                // If unprefixed there can be no prefix
                (cmd.data.unprefixed ? !prefix : !!prefix)
            )
        })

        for (const command of commands) {
            Interpreter.run({
                obj: message,
                command,
                client: this,
                states: {
                    message: {
                        new: message,
                    },
                },
                data: command.compiled.code,
                args,
            })
        }
    },
    intents: ["GuildMessages", "DirectMessages", "MessageContent"],
})
