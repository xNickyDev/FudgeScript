"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrationProperties = exports.IntegrationProperty = void 0;
const discord_js_1 = require("discord.js");
const defineProperties_1 = __importDefault(require("../functions/defineProperties"));
var IntegrationProperty;
(function (IntegrationProperty) {
    IntegrationProperty["id"] = "id";
    IntegrationProperty["name"] = "name";
    IntegrationProperty["type"] = "type";
    IntegrationProperty["roleID"] = "roleID";
    IntegrationProperty["userID"] = "userID";
    IntegrationProperty["guildID"] = "guildID";
    IntegrationProperty["enabled"] = "enabled";
    IntegrationProperty["revoked"] = "revoked";
    IntegrationProperty["syncing"] = "syncing";
    IntegrationProperty["accountID"] = "accountID";
    IntegrationProperty["accountName"] = "accountName";
    IntegrationProperty["applicationID"] = "applicationID";
    IntegrationProperty["enableEmoticons"] = "enableEmoticons";
    IntegrationProperty["subscriberCount"] = "subscriberCount";
    IntegrationProperty["syncedTimestamp"] = "syncedTimestamp";
    IntegrationProperty["expireBehavior"] = "expireBehavior";
    IntegrationProperty["expireGracePeriod"] = "expireGracePeriod";
})(IntegrationProperty || (exports.IntegrationProperty = IntegrationProperty = {}));
exports.IntegrationProperties = (0, defineProperties_1.default)({
    id: (i) => i?.id,
    name: (i) => i?.name,
    type: (i) => i?.type,
    roleID: (i) => i?.role?.id,
    userID: (i) => i?.user?.id,
    guildID: (i) => i?.guild.id,
    enabled: (i) => i?.enabled ?? false,
    revoked: (i) => i?.revoked ?? false,
    syncing: (i) => i?.syncing ?? false,
    accountID: (i) => i?.account.id,
    accountName: (i) => i?.account.name,
    applicationID: (i) => i?.application?.id,
    enableEmoticons: (i) => i?.enableEmoticons ?? false,
    subscriberCount: (i) => i?.subscriberCount,
    syncedTimestamp: (i) => i?.syncedTimestamp,
    expireBehavior: (i) => discord_js_1.IntegrationExpireBehavior[i?.expireBehavior],
    expireGracePeriod: (i) => i?.expireGracePeriod,
});
//# sourceMappingURL=integration.js.map