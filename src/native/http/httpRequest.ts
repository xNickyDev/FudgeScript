import { ArgType, NativeFunction } from "../../structures/@internal/NativeFunction"
import { fetch } from "undici"
import { Return } from "../../structures/@internal/Return"
import { HTTPContentType } from "../../structures"

export default new NativeFunction({
    name: "$httpRequest",
    version: "1.0.0",
    description: "Performs an http request, returns the status code",
    output: ArgType.Number,
    args: [
        {
            name: "url",
            description: "The url to perform this request to",
            type: ArgType.String,
            rest: false,
            required: true,
        },
        {
            name: "method",
            description: "The method to use",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "variable",
            description: "Environment variable name to load the response to",
            rest: false,
            required: false,
            type: ArgType.String,
        },
    ],
    brackets: true,
    unwrap: true,
    async execute(ctx, [url, method, name]) {
        name ??= "result"
        let timeout = ctx.http.timeout

        const controller = new AbortController()
        let timedOut = false

        if (ctx.http.response) delete ctx.http.response
        if (ctx.http.timeout) delete ctx.http.timeout

        const promise = new Promise((_, reject) => {
            if (timeout) {
                setTimeout(() => {
                    controller.abort()
                    timedOut = true
                    reject(new Error())
                }, timeout.time)
            }
        })

        try {
            let ms = performance.now()
            const req = await Promise.race([
                fetch(url, {
                    ...ctx.http,
                    method,
                    body: ctx.http.body ?? ctx.http.form,
                    signal: controller.signal
                }).catch(ctx.noop),
                promise
            ]) as Response
            ms = performance.now() - ms

            const contentType = req.headers.get("content-type")?.split(";")[0]
            const overrideType = ctx.http.contentType

            ctx.clearHttpOptions()
            ctx.http.response = { headers: req.headers, ping: ms }
            
            if (overrideType !== undefined) {
                ctx.setEnvironmentKey(name, await req[HTTPContentType[overrideType].toLowerCase() as Lowercase<keyof typeof HTTPContentType>]())
            } else {
                if (contentType === "application/json") {
                    ctx.setEnvironmentKey(name, await req.json())
                } else if (contentType?.includes("image")) {
                    ctx.setEnvironmentKey(name, await req.arrayBuffer().then(x => Buffer.from(x).toString("base64")))
                } else {
                    ctx.setEnvironmentKey(name, await req.text())
                }
            }
            
            return this.success(req.status)
        } catch (error) {
            if (timedOut) {
                if (timeout?.code) {
                    const resolved = await this["resolveCode"](ctx, timeout.code)
                    if (!this["isValidReturnType"](resolved)) return resolved
                    ctx.container.content = resolved.value as string
                    await ctx.container.send(ctx.obj)
                }
                return this.stop()
            }
            return this.success()
        }
    },
})