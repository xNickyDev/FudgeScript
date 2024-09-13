import { ApplicationCommandDataResolvable, Collection, CommandInteraction, ContextMenuCommandBuilder, Guild, Interaction, RESTPostAPIChatInputApplicationCommandsJSONBody, RESTPostAPIContextMenuApplicationCommandsJSONBody, SlashCommandBuilder } from "discord.js";
import { ApplicationCommand } from "../structures/base/ApplicationCommand";
import { ForgeClient } from "../core";
export declare enum RegistrationType {
    Global = 0,
    Guild = 1,
    All = 2
}
export interface IApplicationCommandData {
    data: SlashCommandBuilder | ContextMenuCommandBuilder | RESTPostAPIChatInputApplicationCommandsJSONBody | RESTPostAPIContextMenuApplicationCommandsJSONBody;
    code: string;
    type?: RegistrationType;
    independent?: boolean;
    path?: string | null;
}
export declare class ApplicationCommandManager {
    readonly client: ForgeClient;
    private commands;
    private path;
    constructor(client: ForgeClient);
    load(path?: string): void;
    private getDisplayOptions;
    getDisplay(input: Interaction | null, hideName: boolean): string | null;
    get(input: CommandInteraction): ApplicationCommand | null;
    add(...values: (ApplicationCommand | IApplicationCommandData | ApplicationCommand[] | IApplicationCommandData[])[]): void;
    private loadOne;
    private validate;
    private readConfig;
    resolve(value: ApplicationCommand | IApplicationCommandData, path: string | null): ApplicationCommand;
    toJSON(type: Parameters<ApplicationCommand["mustRegisterAs"]>[0]): ApplicationCommandDataResolvable[];
    registerGlobal(): Promise<Collection<string, import("discord.js").ApplicationCommand<{
        guild: import("discord.js").GuildResolvable;
    }>>> | undefined;
    registerGuild(g: Guild): Promise<Collection<string, import("discord.js").ApplicationCommand<{}>>> | undefined;
}
//# sourceMappingURL=ApplicationCommandManager.d.ts.map