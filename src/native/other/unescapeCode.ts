import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$unescapeCode",
    version: "1.5.0",
    description: "Code inside this function will be executed",
    unwrap: false,
    brackets: true,
    aliases: [
        "$unescape",
        "$nonEscape"
    ],
    args: [
        {
            name: "code",
            type: ArgType.String,
            description: "The code to execute",
            required: true,
            rest: false
        }
    ],
    output: ArgType.String,
    execute(ctx) {
        const text = this.displayField(0).toString()
            .replace(/\[/g, "[")
            .replace(/]/g, "]")
            .replace(/;/g, ";")
            .replace(/:/g, ":")
            .replace(/\$/g, "$")
            .replace(/>/g, ">")
            .replace(/</g, "<")
            .replace(/=/g, "=")
            .replace(/{/g, "{")
            .replace(/}/g, "}")
            .replace(/,/g, ",")
            .replace(/\(/g, "(")
            .replace(/\)/g, ")")

        return this.success(text)
    },
})