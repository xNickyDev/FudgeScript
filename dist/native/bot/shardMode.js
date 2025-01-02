"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$shardMode",
    aliases: [
        "$botShardMode",
        "$clientShardMode"
    ],
    description: "Returns the shard mode of the client",
    unwrap: false,
    output: structures_1.ArgType.String,
    execute(ctx) {
        return this.success(ctx.client.shard?.mode);
    },
});
//# sourceMappingURL=shardMode.js.map