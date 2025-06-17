import { CompiledFunction } from "../@internal/CompiledFunction"
import { CustomEventEmitter } from "../extended/CustomEventHandler"

export type GetErrorArgs<T extends string> = T extends `${infer L}$${infer R}` ? [unknown, ...GetErrorArgs<R>] : []

export enum ErrorType {
    InvalidArgType = "Given value $1 for argument $2 is not of type $3",
    MissingArg = "Function $1 is missing argument $2",
    MissingFields = "Function $1 requires brackets",
    UnknownXName = "Unknown $1 with name $2",
    Custom = "$1",
    MissingApplicationCommandData = "An application command is missing data property ($1)",
    ExtensionNotFound = "Extension $1 does not seem to be loaded but is being used.",
    MissingCommandType = "A command is missing its type ($1)",
    UnsupportedExtensionVersion = "Extension $1 does not work for your ForgeScript version: $2",
    RequiredExtension = "Extension $1 requires the next extension: $2 loaded to work", 
    CompilerError = "$1 at $2:$3 ($4)",
}

export interface IForgeError {
    type: keyof typeof ErrorType
    message: string
    function?: `$${string}`
    args?: unknown[]
    index?: number
}

let isEmitting = false

export class ForgeError<T extends ErrorType = ErrorType> extends Error {
    public static readonly Regex = /\$(\d+)/g

    public constructor(fn: CompiledFunction | null, type: T, ...args: GetErrorArgs<T>) {
        const message = ForgeError.make(fn, type, ...args)
        super(message)
        
        // Emits the forgeError event whenever an error is thrown
        if (!isEmitting) {
            try {
                isEmitting = true
                CustomEventEmitter.emit("forgeError", {
                    type: Object.keys(ErrorType).find((x) => ErrorType[x as keyof typeof ErrorType] === type),
                    message,
                    args,
                    function: fn?.data.name,
                    index: fn?.data.index
                })
            } catch (error) {
                throw new ForgeError(null, ErrorType.Custom, "Error while handling forgeError: " + error)
            } finally {
                isEmitting = false
            }
        } else {
            throw new ForgeError(null, ErrorType.Custom, "forgeError emission prevented to avoid recursion: " + message)
        }
    }

    public static make(fn: CompiledFunction | null, type: ErrorType, ...args: unknown[]) {
        const res = type.replace(
            this.Regex,
            (match) =>
                `**\`${`${args[Number(match.slice(1)) - 1]}`.replaceAll("\\", "\\\\").replaceAll("`", "\\`")}\`**`
        )
        return `> ${res}${fn ? ` at \`${fn.display}\`` : ""}`
    }
}