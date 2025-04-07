import { ArgType, NativeFunction } from "../../structures"
import translate from "@iamtraction/google-translate"

export default new NativeFunction({
    name: "$translateText",
    version: "2.3.0",
    description: "Translates text into another language",
    aliases: ["$translate"],
    brackets: true,
    args: [
        {
            name: "text",
            description: "The text to translate",
            type: ArgType.String,
            required: true,
            rest: false
        },
        {
            name: "to",
            description: "The language to translate to",
            type: ArgType.String,
            required: true,
            rest: false
        },
        {
            name: "from",
            description: "The language to translate from",
            type: ArgType.String,
            required: false,
            rest: false
        }
    ],
    unwrap: true,
    async execute(ctx, [text, toLang, fromLang]) {
        const res = await translate(text, { to: toLang, from: fromLang || "auto" }).catch(ctx.noop)
        return this.success(res?.text)
    }
})