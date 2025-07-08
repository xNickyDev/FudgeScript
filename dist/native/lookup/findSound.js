"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$findSound",
    version: "2.4.0",
    description: "Finds a sound of a guild",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to find the sound on",
            type: structures_1.ArgType.Guild,
            rest: false,
            required: true,
        },
        {
            name: "query",
            description: "The id or sound name to find",
            rest: false,
            type: structures_1.ArgType.String,
            required: true,
        },
    ],
    output: structures_1.ArgType.SoundboardSound,
    execute(ctx, [guild, q]) {
        if (structures_1.CompiledFunction.IdRegex.test(q)) {
            const sound = guild.soundboardSounds.cache.get(q);
            if (sound)
                return this.success(sound.soundId);
        }
        q = q.toLowerCase();
        return this.success(guild.soundboardSounds.cache.find((x) => x.soundId === q || x.name.toLowerCase() === q)?.soundId);
    },
});
//# sourceMappingURL=findSound.js.map