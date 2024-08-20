"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutomodRuleProperties = exports.AutomodRuleProperty = void 0;
const defineProperties_1 = __importDefault(require("../functions/defineProperties"));
var AutomodRuleProperty;
(function (AutomodRuleProperty) {
    AutomodRuleProperty["actions"] = "actions";
    AutomodRuleProperty["client"] = "client";
    AutomodRuleProperty["creatorId"] = "creatorId";
    AutomodRuleProperty["enabled"] = "enabled";
    AutomodRuleProperty["eventType"] = "eventType";
    AutomodRuleProperty["exemptChannels"] = "exemptChannels";
    AutomodRuleProperty["exemptRoles"] = "exemptRoles";
    AutomodRuleProperty["guildId"] = "guildId";
    AutomodRuleProperty["id"] = "id";
    AutomodRuleProperty["name"] = "name";
    AutomodRuleProperty["triggerMetadata"] = "triggerMetadata";
    AutomodRuleProperty["triggerType"] = "triggerType";
})(AutomodRuleProperty || (exports.AutomodRuleProperty = AutomodRuleProperty = {}));
exports.AutomodRuleProperties = (0, defineProperties_1.default)({
    actions: (i) => JSON.stringify(i?.actions, undefined, 4),
    client: (i) => JSON.stringify(i?.client, undefined, 4),
    creatorId: (i) => i?.creatorId,
    enabled: (i) => i?.enabled,
    eventType: (i) => i?.eventType,
    exemptChannels: (i) => JSON.stringify(i?.exemptChannels?.map((x) => x.id)),
    exemptRoles: (i) => JSON.stringify(i?.exemptRoles?.map((x) => x.id)),
    guildId: (i) => i?.guild.id,
    id: (i) => i?.id,
    name: (i) => i?.name,
    triggerMetadata: (i) => JSON.stringify(i?.triggerMetadata, undefined, 4),
    triggerType: (i) => i?.triggerType,
});
//# sourceMappingURL=automodRule.js.map