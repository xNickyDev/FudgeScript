import { parseEmoji } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$editSoundboardSound",
    version: "2.3.0",
    description: "Edits given soundboard sound, returns bool",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to edit soundboard sound on",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "sound ID",
            description: "The soundboard sound to edit",
            rest: false,
            required: true,
            pointer: 0,
            type: ArgType.SoundboardSound,
        },
        {
            name: "name",
            description: "The new name for the sound",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "emoji",
            description: "The new emoji for the sound",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "volume",
            description: "The new volume for the sound (from 0 to 1)",
            rest: false,
            type: ArgType.Number,
        },
    ],
    output: ArgType.Boolean,
    async execute(ctx, [, sound, name, emoji, volume]) {
        const parsed = emoji ? parseEmoji(emoji) : null

        return this.success(!!(await sound.edit({
            volume,
            name: name || undefined,
            emojiId: parsed?.id || null,
            emojiName: parsed?.id ? null : parsed?.name || null,
        }).catch(ctx.noop)))
    },
})