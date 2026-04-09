"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enumToArray = enumToArray;
exports.resolveNumericEnum = resolveNumericEnum;
function enumToArray(x) {
    return Object.keys(x).filter((x) => isNaN(Number(x)));
}
function resolveNumericEnum(en, value) {
    return typeof (value) === "string" ? en[value] : value;
}
//# sourceMappingURL=enum.js.map