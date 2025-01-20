"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../../core");
const CustomEventHandler_1 = require("../../structures/extended/CustomEventHandler");
exports.default = new CustomEventHandler_1.CustomEventHandler({
    name: "functionError",
    description: "This event is fired when a function throws an error",
    listener: function (err) {
        const commands = this.commands.get("functionError");
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
            console.log(err);
        }
    },
});
//# sourceMappingURL=functionError.js.map