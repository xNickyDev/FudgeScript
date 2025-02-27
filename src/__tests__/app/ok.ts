import { ApplicationCommandOptionType, ApplicationCommandType } from "discord.js"
import { ApplicationCommand } from "../../structures"
import { RegistrationType } from "../../managers"

export default new ApplicationCommand({
    type: 1,
    data: {
        name: "eval",
        name_localizations: {
            "es-ES": "evaluar",

        },
        description_localizations: {
            "es-ES": "Evalua un codigo"
        },
        description: "Evaluate a code.",
        options: [
            {
                type: 3,
                name: "code",
                description: "Your code goes here.",
                required: true,
            },
            {
                type: 5,
                name: "ephemeral",
                description: "Make the response ephemeral?"
            }
        ]
    },
    code: `
    $applicationCommandDisplay
 `
})