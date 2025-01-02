"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$shardParentPort",
    aliases: [
        "$botShardParentPort",
        "$clientShardParentPort"
    ],
    description: "Returns the shard parent port of the client",
    unwrap: false,
    output: structures_1.ArgType.String,
    execute(ctx) {
        return this.success(ctx.client.shard?.parentPort);
    },
});
//# sourceMappingURL=shardParentPort.js.map