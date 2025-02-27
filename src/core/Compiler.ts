import { inspect } from "util"
import { CompiledFunction } from "../structures/@internal/CompiledFunction"
import { ErrorType, ForgeError } from "../structures/forge/ForgeError"
import { Collection } from "discord.js"

export interface IRawField {
    condition?: boolean
    rest?: boolean
}

export interface IRawFunctionFieldDefinition {
    required: boolean
    fields: IRawField[]
}

export interface IRawFunction {
    aliases: null | string[]
    name: string
    /**
     * If undefined, function has no fields.
     * If present and required true, fields are required.
     * If false, fields are not required.
     */
    args: IRawFunctionFieldDefinition | null
}

export type WrappedCode = (args: unknown[]) => string
export type WrappedConditionCode = (lhs: unknown, rhs: unknown) => boolean

export interface ICompiledFunctionField {
    value: string
    functions: ICompiledFunction[]
    resolve: WrappedCode
}

export enum OperatorType {
    Eq = "==",
    NotEq = "!=",
    Lte = "<=",
    Gte = ">=",
    Gt = ">",
    Lt = "<",
    None = "unknown",
}

export const Operators = new Set<OperatorType>(Object.values(OperatorType) as OperatorType[])

export const Conditions: Record<OperatorType, WrappedConditionCode> = {
    unknown: (lhs, rhs) => lhs === "true",
    "!=": (lhs, rhs) => lhs !== rhs,
    "==": (lhs, rhs) => lhs === rhs,
    "<": (lhs, rhs) => Number(lhs) < Number(rhs),
    "<=": (lhs, rhs) => Number(lhs) <= Number(rhs),
    ">": (lhs, rhs) => Number(lhs) > Number(rhs),
    ">=": (lhs, rhs) => Number(lhs) >= Number(rhs),
}

export interface ICompiledFunctionConditionField {
    op: OperatorType
    lhs: ICompiledFunctionField
    rhs?: ICompiledFunctionField
    resolve: WrappedConditionCode
}

export interface ILocation {
    line: number
    column: number
}

export interface ICompiledFunction {
    index: number
    id: string
    name: string
    count: string | null

    /**
     * Whether error will be silenced and just exit execution
     */
    silent: boolean

    /**
     * Whether output is not desirable
     */
    negated: boolean

    fields: null | (ICompiledFunctionField | ICompiledFunctionConditionField)[]
}

export interface ICompilationResult {
    code: string
    functions: ICompiledFunction[]
    resolve: WrappedCode
}

export interface IExtendedCompilationResult extends Omit<ICompilationResult, "functions"> {
    functions: CompiledFunction[]
}

export interface IRawFunctionMatch {
    index: number
    length: number
    negated: boolean
    silent: boolean
    count: string | null
    fn: IRawFunction
}

/**
 * REWRITE NEEDED
 */
export class Compiler {
    public static Syntax = {
        Open: "[",
        Close: "]",
        Escape: "\\",
        Count: "@",
        Negation: "!",
        Separator: ";",
        Silent: "#"
    }

    private static SystemRegex = /(\\+)?\[SYSTEM_FUNCTION\(\d+\)\]/gm
    private static Regex: RegExp
    private static InvalidCharRegex = /(\\|\${|`)/g
    private static Functions = new Collection<string, IRawFunction>()
    private static EscapeRegex = /(\.|\$|\(|\)|\*|\[|\]|\{|\}|\?|!|\^)/gim

    private id = 0
    private matches: Array<IRawFunctionMatch>
    private matchIndex = 0
    private index = 0

    private outputFunctions = new Array<ICompiledFunction>()
    private outputCode = ""

    private constructor(
        private readonly path?: null | string,
        private readonly code?: string
    ) {
        if (code) {
            this.matches = Array.from(code.matchAll(Compiler.Regex)).map((x) => ({
                index: x.index!,
                negated: !!x[1],
                silent: !!x[2],
                length: x[0].length,
                count: x[4] ?? null,
                fn: this.getFunction(x[5]),
            }))
        } else this.matches = []
    }

    public compile(): ICompilationResult {
        if (this.matches.length !== 0) {
            // Loop while functions are unmatched
            let match: IRawFunctionMatch
            loop: while ((match = this.match) !== undefined) {
                while (match.index !== this.index) {
                    const char = this.char()!
                    const { isEscape } = this.getCharInfo(char)

                    if (isEscape) {
                        const { char } = this.processEscape()
                        this.outputCode += char
                        continue loop
                    }

                    this.outputCode += char
                    this.index++
                }

                const parsed = this.parseFunction()
                this.outputFunctions.push(parsed)
                this.outputCode += parsed.id
            }

            this.outputCode += this.code!.slice(this.index)
        } else this.outputCode = this.code ?? ""

        return {
            code: this.outputCode,
            functions: this.outputFunctions,
            resolve: this.wrap(this.outputCode),
        }
    }

    private parseFunction() {
        // Skip this match already
        const match = this.matches[this.matchIndex++]

        // Skip function
        this.skip(match.length)

        const hasFields = this.code![this.index] === Compiler.Syntax.Open
        if (!hasFields && match.fn.args?.required) {
            this.error(`Function ${match.fn.name} requires brackets`)
        } else if (!hasFields || match.fn.args === null) {
            return this.prepareFunction(match, null)
        }

        // Skip [
        this.skip(1)

        const fields = new Array<ICompiledFunctionField | ICompiledFunctionConditionField>()

        // Field parsing
        for (let i = 0, len = match.fn.args!.fields.length; i < len; i++) {
            let isLast = i + 1 === len

            const field = match.fn.args!.fields[i]
            if (!field.rest) {
                fields.push(this.parseAnyField(match, field))
            } else {
                for (;;) {
                    fields.push(this.parseAnyField(match, field))
                    if (this.back() !== Compiler.Syntax.Separator) break
                }
            }

            const isSeparator = this.back() === Compiler.Syntax.Separator
            if (!isSeparator) break
            else if (isLast && isSeparator) {
                this.error(`Function ${match.fn.name} expects ${match.fn.args?.fields.length} arguments at most`)
            }
        }

        return this.prepareFunction(match, fields)
    }

    private getCharInfo(char: string) {
        return {
            isSeparator: char === Compiler.Syntax.Separator,
            isClosure: char === Compiler.Syntax.Close,
            isEscape: char === Compiler.Syntax.Escape,
        }
    }

    private parseFieldMatch(fns: Array<ICompiledFunction>, match: IRawFunctionMatch) {
        const fn = this.parseFunction()
        fns.push(fn)
        // Next match
        return {
            nextMatch: this.match,
            fn,
        }
    }

    private processEscape() {
        this.index++
        const next = this.char()

        const now = this.match
        if (now && now.index === this.index) this.matchIndex++

        this.index++

        return {
            nextMatch: this.match,
            char: next,
        }
    }

    private parseConditionField(ref: IRawFunctionMatch): ICompiledFunctionConditionField {
        const data = {} as ICompiledFunctionConditionField

        const functions = new Array<ICompiledFunction>()
        let fieldValue = ""
        let closedGracefully = false

        let match = this.match
        let char: string | undefined
        while ((char = this.char()) !== undefined) {
            const { isClosure, isEscape, isSeparator } = this.getCharInfo(char)

            if (isEscape) {
                const { char, nextMatch } = this.processEscape()
                fieldValue += char
                match = nextMatch
                continue
            }

            if (isClosure || isSeparator) {
                closedGracefully = true
                break
            }

            if (match?.index === this.index) {
                const { fn, nextMatch } = this.parseFieldMatch(functions, match)
                match = nextMatch
                fieldValue += fn.id
                continue
            }

            if (data.op === undefined) {
                const possibleOperator = ([char + this.peek()!, char] as OperatorType[]).find((x) => Operators.has(x))
                if (possibleOperator) {
                    data.op = possibleOperator as OperatorType
                    data.lhs = {
                        functions: [...functions],
                        resolve: this.wrap(fieldValue),
                        value: fieldValue,
                    }

                    fieldValue = ""
                    functions.length = 0
                    this.index += data.op.length
                    continue
                }
            }

            fieldValue += char
            this.index++
        }

        if (!closedGracefully) this.error(`Function ${ref.fn.name} is missing brace closure`)

        const out: ICompiledFunctionField = {
            functions,
            value: fieldValue,
            resolve: this.wrap(fieldValue),
        }

        if (data.op) data.rhs = out
        else data.lhs = out

        data.op ??= OperatorType.None
        data.resolve = this.wrapCondition(data.op)

        return data
    }

    private parseNormalField(ref: IRawFunctionMatch): ICompiledFunctionField {
        const functions = new Array<ICompiledFunction>()
        let fieldValue = ""
        let closedGracefully = false

        let match = this.match
        let char: string | undefined
        while ((char = this.char()) !== undefined) {
            const { isClosure, isEscape, isSeparator } = this.getCharInfo(char)

            if (isEscape) {
                const { char, nextMatch } = this.processEscape()
                fieldValue += char
                match = nextMatch
                continue
            }

            if (isClosure || isSeparator) {
                closedGracefully = true
                break
            }

            if (match?.index === this.index) {
                const { fn, nextMatch } = this.parseFieldMatch(functions, match)
                match = nextMatch
                fieldValue += fn.id
                continue
            }

            fieldValue += char
            this.index++
        }

        if (!closedGracefully) this.error(`Function ${ref.fn.name} is missing brace closure`)

        return {
            resolve: this.wrap(fieldValue),
            functions,
            value: fieldValue,
        }
    }

    private parseAnyField(
        ref: IRawFunctionMatch,
        field: IRawField
    ): ICompiledFunctionField | ICompiledFunctionConditionField {
        const fld = field.condition ? this.parseConditionField(ref) : this.parseNormalField(ref)
        this.skip(1)
        return fld
    }

    private prepareFunction(
        match: IRawFunctionMatch,
        fields: null | (ICompiledFunctionField | ICompiledFunctionConditionField)[]
    ): ICompiledFunction {
        const id = this.getNextId()
        return {
            index: this.id - 1,
            id,
            fields,
            count: match.count,
            silent: match.silent,
            name: match.fn.name,
            negated: match.negated,
        }
    }

    private skip(n: number) {
        return this.moveTo(n + this.index)
    }

    private skipIf(char: string) {
        if (char === this.code![this.index]) return this.skip(1), true
        return false
    }

    private get match() {
        return this.matches[this.matchIndex]
    }

    private getFunction(str: string) {
        const fn = `$${str.toLowerCase()}`
        return (
            Compiler.Functions.get(fn)! ??
            Compiler.Functions.find((x) => x.aliases?.some((x) => x.toLowerCase() === fn)) ??
            this.error(`Function ${fn} is not registered.`)
        )
    }

    private error(str: string): never {
        const { line, column } = this.locate(this.index)
        throw new ForgeError(null, ErrorType.CompilerError, str, line, column, this.path ?? "index file")
    }

    private locate(index: number): ILocation {
        const data: ILocation = {
            column: 0,
            line: 1,
        }

        for (let i = 0; i < index; i++) {
            const char = this.code![i]
            if (char === "\n") data.line++, (data.column = 0)
            else data.column++
        }

        return data
    }

    private back() {
        return this.code![this.index - 1]
    }

    private wrapCondition(op: OperatorType) {
        return Conditions[op]
    }

    private wrap(code: string) {
        let i = 0
        const gencode = code.replace(Compiler.InvalidCharRegex, "\\$1").replace(Compiler.SystemRegex, () => {
            return "${args[" + i++ + "] ?? ''}"
        })

        return new Function("args", "return `" + gencode + "`") as WrappedCode
    }

    private moveTo(index: number) {
        this.index = index
    }

    private getNextId() {
        return `[SYSTEM_FUNCTION(${this.id++})]`
    }

    private char(): undefined | string {
        return this.code![this.index]
    }

    private peek(): undefined | string {
        return this.code![this.index + 1]
    }

    private next(): undefined | string {
        return this.code![this.index++]
    }

    private static setFunctions(fns: IRawFunction[]) {
        fns.map((x) => {
            this.Functions.set(x.name.toLowerCase(), x)
            x.aliases
                ?.filter((x) => typeof x === "string")
                ?.map((alias) => this.Functions.set((alias as string).toLowerCase(), x))
        })

        const mapped = Array.from(this.Functions.keys())

        this.Regex = new RegExp(
            `\\$(\\!)?(\\#)?(@\\[(.*?)\\])?(${mapped
                .map((x) =>
                    (x.startsWith("$") ? x.slice(1).toLowerCase() : x.toLowerCase()).replace(
                        Compiler.EscapeRegex,
                        "\\$1"
                    )
                )
                .sort((x, y) => y.length - x.length)
                .join("|")})`,
            "gim"
        )
    }

    public static compile(code?: string, path?: string | null): IExtendedCompilationResult {
        const result = new this(path, code).compile()
        return {
            ...result,
            functions: result.functions.map((x) => new CompiledFunction(x)),
        }
    }

    public static setSyntax(syntax: typeof this.Syntax) {
        Reflect.set(Compiler, "Syntax", syntax)
    }
}
