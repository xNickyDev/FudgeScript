"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../../core");
const DiscordEventHandler_1 = require("../../structures/extended/DiscordEventHandler");
exports.default = new DiscordEventHandler_1.DiscordEventHandler({
    name: "applicationCommandPermissionsUpdate",
    version: "1.5.0",
    description: "This event is fired when permissions of an application command are updated",
    listener: async function (c) {
        const commands = this.commands.get("applicationCommandPermissionsUpdate");
        for (const command of commands) {
            core_1.Interpreter.run({
                obj: c,
                command,
                client: this,
                data: command.compiled.code,
                args: [],
            });
        }
    },
});
//# sourceMappingURL=applicationCommandPermissionsUpdate.js.map