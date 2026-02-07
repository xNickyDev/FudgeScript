"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$sendSoundboardSound",
    version: "2.7.0",
    description: "Sends a sound to a voice channel",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to send the sound to",
            rest: false,
            required: true,
            type: structures_1.ArgType.Channel,
            check: (i) => i.type === discord_js_1.ChannelType.GuildVoice,
        },
        {
            name: "sound ID",
            description: "The sound to send",
            rest: false,
            required: true,
            type: structures_1.ArgType.SoundboardSound,
            pointer: 0,
            pointerProperty: "guild"
        },
    ],
    async execute(ctx, [chan, sound]) {
        await chan.sendSoundboardSound(sound);
        return this.success();
    },
});
//# sourceMappingURL=sendSoundboardSound.js.map