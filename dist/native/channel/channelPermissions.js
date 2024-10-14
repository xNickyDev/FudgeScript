"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$channelPermissions",
    description: "Returns all permission overwrites of a channel",
    aliases: [
        "$channelPerms",
        "$channelOverwrites"
    ],
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to get perms from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Channel,
            check: (i) => "permissionOverwrites" in i
        },
        {
            name: "property",
            description: "The property of the overwrites to return",
            rest: false,
            required: false,
            type: structures_1.ArgType.String
        },
        {
            name: "separator",
            description: "The separator to use for every overwrite",
            rest: false,
            type: structures_1.ArgType.String
        }
    ],
    output: structures_1.ArgType.Unknown,
    execute(ctx, [ch, prop, sep]) {
        const chan = (ch ?? ctx.channel);
        const perms = chan.permissionOverwrites.cache;
        return this.successJSON(prop ? perms.map(perm => perm.id).join(sep ?? ", ") : perms);
    },
});
//# sourceMappingURL=channelPermissions.js.map