"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomEventHandler = exports.CustomEventEmitter = void 0;
const node_events_1 = __importDefault(require("node:events"));
const BaseEventHandler_1 = require("../base/BaseEventHandler");
exports.CustomEventEmitter = new node_events_1.default();
class CustomEventHandler extends BaseEventHandler_1.BaseEventHandler {
    register(client) {
        exports.CustomEventEmitter.on(this.name, this.listener.bind(client));
    }
}
exports.CustomEventHandler = CustomEventHandler;
//# sourceMappingURL=CustomEventHandler.js.map