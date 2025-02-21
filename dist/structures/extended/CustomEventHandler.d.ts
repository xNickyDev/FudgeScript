/// <reference types="node" />
import EventEmitter from "node:events";
import { type ForgeClient } from "../../core/ForgeClient";
import { BaseEventHandler, CustomEvents } from "../base/BaseEventHandler";
export declare const CustomEventEmitter: EventEmitter;
export declare class CustomEventHandler<T extends keyof CustomEvents> extends BaseEventHandler<CustomEvents, T> {
    register(client: ForgeClient): void;
}
//# sourceMappingURL=CustomEventHandler.d.ts.map