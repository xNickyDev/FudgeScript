"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const array_1 = __importDefault(require("../../functions/array"));
const channelThreadIDs_1 = require("./channelThreadIDs");
exports.default = new structures_1.NativeFunction({
    name: "$channelArchivedThreadIDs",
    description: "Returns the archived thread ids of a channel",
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
            name: "type",
            description: "The type of threads to return, defaults to public",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: channelThreadIDs_1.ThreadType
        },
        {
            name: "separator",
            description: "The separator to use for every thread",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    output: (0, array_1.default)(),
    async execute(ctx, [channel, type, sep]) {
        const chan = channel ?? ctx.channel;
        return this.success("threads" in chan
            ? (await chan.threads.fetchArchived({ type: type || undefined }).catch(ctx.noop))?.threads.map((x) => x.id).join(sep ?? ", ")
            : null);
    },
});
//# sourceMappingURL=channelArchivedThreadIDs.js.map