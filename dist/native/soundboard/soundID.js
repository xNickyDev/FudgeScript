"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$soundID",
    version: "2.3.0",
    description: "Returns a sound id with given name",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to return the sound from",
            rest: false,
            type: structures_1.ArgType.Guild,
            required: true,
        },
        {
            name: "name",
            description: "The sound name to return its id",
            rest: true,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    output: structures_1.ArgType.SoundboardSound,
    execute(ctx, [guild, args]) {
        if (this.hasFields) {
            const name = args.join(";");
            return this.success(guild.soundboardSounds.cache.find((x) => x.name === name)?.soundId);
        }
        return this.success(ctx.sound?.soundId);
    },
});
//# sourceMappingURL=soundID.js.map