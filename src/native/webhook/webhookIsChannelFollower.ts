import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$webhookIsChannelFollower",
    version: "2.2.0",
    description: "Checks whether given webhook is a channel follower",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "id",
            description: "The webhook id",
            rest: false,
            type: ArgType.Webhook,
            required: true,
        },
    ],
    output: ArgType.Boolean,
    async execute(ctx, [web]) {
        return this.success(web.isChannelFollower())
    },
})