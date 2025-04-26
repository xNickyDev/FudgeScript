"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$createSoundboardSound",
    description: "Creates a new soundboard sound, returns sound id",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to create soundboard sound on",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
        {
            name: "name",
            description: "The name for the sound",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "file",
            description: "The file for the sound",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "emoji",
            description: "The emoji for the sound",
            rest: false,
            type: structures_1.ArgType.String,
        },
        {
            name: "volume",
            description: "The volume for the sound (from 0 to 1)",
            rest: false,
            type: structures_1.ArgType.Number,
        },
        {
            name: "reason",
            description: "The reason for creating the sound",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    output: structures_1.ArgType.SoundboardSound,
    async execute(ctx, [guild, name, file, emoji, volume, reason]) {
        const parsed = emoji ? (0, discord_js_1.parseEmoji)(emoji) : undefined;
        const sound = await guild.soundboardSounds.create({
            name,
            file,
            emojiId: parsed?.id,
            emojiName: parsed?.name,
            volume: typeof (volume) === "number" ? volume : undefined,
            reason: reason || undefined
        }).catch(ctx.noop);
        return this.success(sound?.soundId);
    },
});
//# sourceMappingURL=createSoundboardSound.js.map