"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadType = void 0;
const structures_1 = require("../../structures");
var ThreadType;
(function (ThreadType) {
    ThreadType["Public"] = "public";
    ThreadType["Private"] = "private";
})(ThreadType || (exports.ThreadType = ThreadType = {}));
exports.default = new structures_1.NativeFunction({
    name: "$fetchThreads",
    version: "2.5.0",
    description: "Caches all threads of a channel",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to cache its threads",
            rest: false,
            type: structures_1.ArgType.Channel,
            required: true,
            check: (i) => "threads" in i
        },
        {
            name: "archived",
            description: "Whether to cache archived threads, otherwise active",
            rest: false,
            type: structures_1.ArgType.Boolean,
        },
        {
            name: "type",
            description: "The type of archived threads to cache, defaults to public",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: ThreadType
        },
    ],
    async execute(ctx, [channel, archived, type]) {
        const chan = channel ?? ctx.channel;
        if ("threads" in chan) {
            const threads = chan.threads;
            if (archived)
                await threads.fetchArchived({ type: type || undefined, fetchAll: true }).catch(ctx.noop);
            else
                await threads.fetchActive().catch(ctx.noop);
        }
        return this.success();
    },
});
//# sourceMappingURL=fetchThreads.js.map