import EventEmitter from "node:events"
import { type ForgeClient } from "../../core/ForgeClient"
import { BaseEventHandler, CustomEvents } from "../base/BaseEventHandler"

export const CustomEventEmitter = new EventEmitter()

export class CustomEventHandler<T extends keyof CustomEvents> extends BaseEventHandler<CustomEvents, T> {
    public register(client: ForgeClient): void {
        CustomEventEmitter.on(this.name, this.listener.bind(client) as any)
    }
}