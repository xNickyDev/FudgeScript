"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadType = void 0;
const structures_1 = require("../../structures");
const array_1 = __importDefault(require("../../functions/array"));
var ThreadType;
(function (ThreadType) {
    ThreadType["Public"] = "public";
    ThreadType["Private"] = "private";
})(ThreadType || (exports.ThreadType = ThreadType = {}));
exports.default = new structures_1.NativeFunction({
    name: "$channelThreadIDs",
    version: "2.5.0",
    description: "Returns the thread ids of a channel",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to get its threads",
            rest: false,
            type: structures_1.ArgType.Channel,
            required: true,
            check: (i) => "threads" in i
        },
        {
            name: "archived",
            description: "Whether to return archived threads, otherwise active",
            rest: false,
            type: structures_1.ArgType.Boolean,
        },
        {
            name: "type",
            description: "The type of archived threads to return, defaults to public",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: ThreadType
        },
        {
            name: "separator",
            description: "The separator to use for every thread",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    output: (0, array_1.default)(),
    async execute(ctx, [channel, archived, type, sep]) {
        const chan = channel ?? ctx.channel;
        const options = {
            archived: {
                type: type || undefined,
                fetchAll: true
            }
        };
        return this.success("threads" in chan
            ? (await chan.threads.fetch(archived ? options : undefined).catch(ctx.noop))?.threads.map((x) => x.id).join(sep ?? ", ")
            : null);
    },
});
//# sourceMappingURL=channelThreadIDs.js.map