import { CompiledFunction, Context, Logger } from "../structures"

export default function(this: Context, fn: CompiledFunction, ...args: any[]) {
    if (this.hasDisabledConsoleErrors() || fn.hasDisabledConsoleErrors()) {
        return
    } 

    Logger.error(...args)
}