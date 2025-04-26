import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
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
            type: ArgType.Guild,
            required: true,
        },
        {
            name: "name",
            description: "The sound name to return its id",
            rest: true,
            required: true,
            type: ArgType.SoundboardSound,
            pointer: 0,
        },
    ],
    output: ArgType.SoundboardSound,
    execute(ctx, [guild, args]) {
        if (this.hasFields) {
            const name = args.join(";")
            return this.success(guild.soundboardSounds.cache.find((x) => x.name === name)?.soundId)
        }
        return this.success(ctx.sound?.soundId)
    },
})