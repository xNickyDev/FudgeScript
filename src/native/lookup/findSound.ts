import { ArgType, CompiledFunction, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$findSound",
    version: "2.4.0",
    description: "Finds a sound of a guild",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to find the sound on",
            type: ArgType.Guild,
            rest: false,
            required: true,
        },
        {
            name: "query",
            description: "The id or sound name to find",
            rest: false,
            type: ArgType.String,
            required: true,
        },
    ],
    output: ArgType.SoundboardSound,
    execute(ctx, [guild, q]) {
        if (CompiledFunction.IdRegex.test(q)) {
            const sound = guild.soundboardSounds.cache.get(q)
            if (sound) return this.success(sound.soundId)
        }

        q = q.toLowerCase()

        return this.success(guild.soundboardSounds.cache.find((x) => x.soundId === q || x.name.toLowerCase() === q)?.soundId)
    },
})