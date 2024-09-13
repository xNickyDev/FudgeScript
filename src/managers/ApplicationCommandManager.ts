/* eslint-disable indent */
import {
    APIApplicationCommandOption,
    APIApplicationCommandSubcommandOption,
    ApplicationCommandData,
    ApplicationCommandDataResolvable,
    ApplicationCommandOptionType,
    ApplicationCommandType,
    ChatInputCommandInteraction,
    Collection,
    CommandInteraction,
    CommandInteractionOption,
    ContextMenuCommandBuilder,
    ContextMenuCommandInteraction,
    Events,
    Guild,
    Interaction,
    RESTPostAPIChatInputApplicationCommandsJSONBody,
    RESTPostAPIContextMenuApplicationCommandsJSONBody,
    SlashCommandBuilder,
} from "discord.js"
import { ApplicationCommand } from "../structures/base/ApplicationCommand"
import recursiveReaddirSync from "../functions/recursiveReaddirSync"
import { ForgeClient } from "../core"
import { NativeEventName } from "./EventManager"
import { readdirSync, statSync, readFileSync } from "fs"
import { join } from "path"
import { cwd } from "process"

export enum RegistrationType {
    Global,
    Guild,
    All,
}

export interface IApplicationCommandData {
    data:
        | SlashCommandBuilder
        | ContextMenuCommandBuilder
        | RESTPostAPIChatInputApplicationCommandsJSONBody
        | RESTPostAPIContextMenuApplicationCommandsJSONBody
    code: string
    type?: RegistrationType
    independent?: boolean
    path?: string | null
}

function readConfig(path: string): any {
    try {
        const configPath = join(path, "config.json")
        if (statSync(configPath).isFile()) {
            return JSON.parse(readFileSync(configPath, "utf8"))
        }
    } catch (error) {
        return {}
    }
    return {}
}

function applyConfigToCommandData(data: any, config: any): any {
    return {
        ...data,
        ...config,
    }
}

export class ApplicationCommandManager {
    /**
     * If:
     * - value is app command = slash command
     * - value is collection:
     *  - value is slash command = subcommands
     *  - value is collection = group with subcommands
     */
    private commands = new Collection<
        string,
        ApplicationCommand | Collection<string, ApplicationCommand | Collection<string, ApplicationCommand>>
    >()
    private path!: string

    public constructor(public readonly client: ForgeClient) {}

    /**
     * PATH TREE MATTERS
     * @param path
     */
    public load(path: string = this.path) {
        if (!path) return

        this.path ??= path
        this.commands.clear()

        for (const mainPath of readdirSync(path)) {
            const resolved = join(path, mainPath)
            const stats = statSync(resolved)
            if (stats.isDirectory()) {
                const mainConfig = readConfig(resolved)
                const col = new Collection<string, ApplicationCommand | Collection<string, ApplicationCommand>>()

                for (const secondPath of readdirSync(resolved)) {
                    const secondResolved = join(resolved, secondPath)
                    const stats = statSync(secondResolved)
                    if (stats.isDirectory()) {
                        const secondConfig = readConfig(secondResolved)
                        const nextCol = new Collection<string, ApplicationCommand>()

                        for (const lastPath of readdirSync(secondResolved)) {
                            const thirdResolved = join(secondResolved, lastPath)
                            const stats = statSync(thirdResolved)
                            if (stats.isDirectory())
                                throw new Error(`Disallowed folder found for slash command tree: ${thirdResolved}`)
                            const loaded = this.loadOne(join(cwd(), thirdResolved))
                            if (!loaded) continue
                            else if (loaded.options.independent) {
                                this.commands.set(loaded.name, loaded)
                                continue
                            }

                            nextCol.set(loaded.name, loaded)
                        }

                        if (nextCol.size === 0) continue
                        col.set(secondPath, nextCol)
                    } else {
                        const loaded = this.loadOne(join(cwd(), secondResolved))
                        if (!loaded) continue
                        else if (loaded.options.independent) {
                            this.commands.set(loaded.name, loaded)
                            continue
                        }

                        col.set(loaded.name, loaded)
                    }
                }

                if (col.size === 0) continue
                this.commands.set(mainPath, col)
            } else {
                const loaded = this.loadOne(join(cwd(), resolved))
                if (!loaded) continue
                this.commands.set(mainPath, loaded)
            }
        }
    }

    private getDisplayOptions(input: readonly CommandInteractionOption[], hideName: boolean) {
        const arr = new Array<string>()

        for (const data of input) {
            if (data.value !== undefined) {
                arr.push(`${hideName ? "" : `${data.name}: `}${data.value}`)
            } else if (data.options?.length) arr.push(...this.getDisplayOptions(data.options, hideName))
        }

        return arr
    }

    public getDisplay(input: Interaction | null, hideName: boolean) {
        if (input instanceof ChatInputCommandInteraction) {
            const commandName = input.commandName
            const subcommandName = input.options.getSubcommand(false)
            const subcommandGroupName = input.options.getSubcommandGroup(false)
            const filteredOptions = this.getDisplayOptions(input.options.data, hideName)
            return `/${commandName}${
                subcommandGroupName
                    ? subcommandName
                        ? ` ${subcommandGroupName} ${subcommandName}`
                        : ` ${subcommandGroupName}`
                    : subcommandName
                    ? ` ${subcommandName}`
                    : ""
            } ${filteredOptions.join(" ")}`
        } else if (input instanceof ContextMenuCommandInteraction) return `/${input.commandName}`
        return null
    }

    public get(input: CommandInteraction): ApplicationCommand | null {
        const commandName = input.commandName
        if (!input.isChatInputCommand()) return this.commands.get(commandName) as ApplicationCommand
        const subcommandName = input.options.getSubcommand(false)
        const subcommandGroupName = input.options.getSubcommandGroup(false)

        const cmd = this.commands.get(commandName) ?? null
        if (cmd instanceof Collection) {
            const col = cmd.get(subcommandGroupName ?? subcommandName!)
            if (col instanceof Collection) {
                return col.get(subcommandName!) ?? null
            }

            return col ?? null
        }

        return cmd
    }

    /**
     * **WARNING** This function does not allow subcommand & subcommand group options. Consider using ApplicationCommandManager#load to load a tree from a folder.
     * @param values
     * @returns
     */
    public add(
        ...values: (ApplicationCommand | IApplicationCommandData | ApplicationCommand[] | IApplicationCommandData[])[]
    ): void {
        for (const value of values) {
            if (Array.isArray(value)) return this.add(...value)
            const resolved = this.resolve(value, null)
            this.commands.set(resolved.name, resolved)
        }
    }

    private loadOne(reqPath: string) {
        if (!reqPath.endsWith(".js")) return null
        delete require.cache[require.resolve(reqPath)]
        const req = require(reqPath)
        let value = req.default ?? req
        if (!value || !Object.keys(value).length) return null
        else if (Array.isArray(value)) throw new Error("Disallowed")
        return this.resolve(value, reqPath)
    }

    private validate(app: ApplicationCommand, path: string | null) {
        const json = app.toJSON()
        if (
            json.options?.some(
                (x) =>
                    x.type === ApplicationCommandOptionType.Subcommand ||
                    x.type === ApplicationCommandOptionType.SubcommandGroup
            )
        ) {
            throw new Error(
                `Attempted to define subcommand / subcommand group without using path tree definition. (${
                    path ?? "index file"
                })`
            )
        }
    }

    public resolve(value: ApplicationCommand | IApplicationCommandData, path: string | null) {
        const v = value instanceof ApplicationCommand ? value : new ApplicationCommand(value)
        this.validate(v, path)

        const configPath = path ? join(this.path, path) : this.path
        const config = readConfig(configPath)
        const commandData = applyConfigToCommandData(v.options.data, config)

        return new ApplicationCommand({ ...v.options, data: commandData })
    }

    toJSON(type: Parameters<ApplicationCommand["mustRegisterAs"]>[0]): ApplicationCommandDataResolvable[] {
        const arr = new Array<ApplicationCommandDataResolvable>()
    
        for (const [commandName, value] of this.commands) {
            if (value instanceof ApplicationCommand) {
                if (!value.mustRegisterAs(type)) continue

                // Apply configuration settings to command data
                const config = readConfig(this.path ?? "");
                const data = value.options.data;
                arr.push({ ...data, ...config });
            } else {
                const json: RESTPostAPIChatInputApplicationCommandsJSONBody = {
                    name: commandName,
                    description: "none",
                    type: ApplicationCommandType.ChatInput,
                    options: [],
                }

                for (const [nextName, values] of value) {
                    if (values instanceof Collection) {
                        const raw: APIApplicationCommandOption = {
                            name: nextName,
                            description: "none",
                            type: ApplicationCommandOptionType.SubcommandGroup,
                            options: [],
                        }

                        for (const [lastName, command] of values) {
                            if (!command.mustRegisterAs(type)) continue

                            const commandData = command.toJSON()
                            const commandConfig = readConfig(this.path ?? "")
                            raw.options!.push({
                                ...commandData,
                                ...commandConfig,
                                name: lastName,
                                type: ApplicationCommandOptionType.Subcommand,
                            } as APIApplicationCommandSubcommandOption)
                        }

                        if (!raw.options?.length) continue
                        json.options!.push(raw)
                    } else {
                        if (!values.mustRegisterAs(type)) continue

                        const commandData = values.toJSON()
                        const commandConfig = readConfig(this.path ?? "")
                        json.options!.push({
                            ...commandData,
                            ...commandConfig,
                            type: ApplicationCommandOptionType.Subcommand,
                        } as APIApplicationCommandOption)
                    }
                }

                if (!json.options?.length) continue
                arr.push(json)
            }
        }

        return arr
    }

    public registerGlobal() {
        if (!this.commands.size) return
        this.client.events.load(NativeEventName, Events.InteractionCreate)
        return this.client.application.commands.set(this.toJSON(RegistrationType.Global))
    }

    public registerGuild(g: Guild) {
        if (!this.commands.size) return
        this.client.events.load(NativeEventName, Events.InteractionCreate)
        return g.commands.set(this.toJSON(RegistrationType.Guild))
    }
}