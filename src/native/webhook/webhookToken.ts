import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$webhookToken",
    version: "1.0.0",
    description: "Returns the token of given webhook",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "webhook ID",
            description: "The webhook id",
            rest: false,
            type: ArgType.Webhook,
            required: true,
        },
    ],
    output: ArgType.String,
    execute(ctx, [web]) {
        return this.success(web.token)
    },
})