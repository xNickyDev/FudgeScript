"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../../core");
const CustomEventHandler_1 = require("../../structures/extended/CustomEventHandler");
exports.default = new CustomEventHandler_1.CustomEventHandler({
    name: "forgeError",
    version: "2.2.0",
    description: "This event is fired when a custom forge error is thrown",
    listener: function (err) {
        const commands = this.commands.get("forgeError");
        if (commands.length) {
            for (const command of commands) {
                core_1.Interpreter.run({
                    client: this,
                    command,
                    data: command.compiled.code,
                    obj: {},
                    extras: err,
                });
            }
        }
    },
});
//# sourceMappingURL=forgeError.js.map