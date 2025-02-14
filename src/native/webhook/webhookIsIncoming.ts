import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$webhookIsIncoming",
    version: "2.2.0",
    description: "Checks whether given webhook is of incoming type",
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
        return this.success(web.isIncoming())
    },
})