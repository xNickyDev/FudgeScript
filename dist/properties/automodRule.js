"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutomodRuleProperties = exports.AutomodRuleProperty = void 0;
const defineProperties_1 = __importDefault(require("../functions/defineProperties"));
var AutomodRuleProperty;
(function (AutomodRuleProperty) {
    AutomodRuleProperty["id"] = "id";
    AutomodRuleProperty["name"] = "name";
    AutomodRuleProperty["actions"] = "actions";
    AutomodRuleProperty["authorID"] = "authorID";
    AutomodRuleProperty["enabled"] = "enabled";
    AutomodRuleProperty["eventType"] = "eventType";
    AutomodRuleProperty["exemptChannels"] = "exemptChannels";
    AutomodRuleProperty["exemptRoles"] = "exemptRoles";
    AutomodRuleProperty["triggerMetadata"] = "triggerMetadata";
    AutomodRuleProperty["triggerType"] = "triggerType";
})(AutomodRuleProperty || (exports.AutomodRuleProperty = AutomodRuleProperty = {}));
exports.AutomodRuleProperties = (0, defineProperties_1.default)({
    id: (i) => i?.id,
    name: (i) => i?.name,
    actions: (i) => JSON.stringify(i?.actions, undefined, 4) || null,
    authorID: (i) => i?.creatorId,
    enabled: (i) => i?.enabled,
    eventType: (i) => i?.eventType,
    exemptChannels: (i) => JSON.stringify(i?.exemptChannels?.map((x) => x.id)) || null,
    exemptRoles: (i) => JSON.stringify(i?.exemptRoles?.map((x) => x.id)) || null,
    triggerMetadata: (i) => JSON.stringify(i?.triggerMetadata, undefined, 4) || null,
    triggerType: (i) => i?.triggerType,
});
//# sourceMappingURL=automodRule.js.map