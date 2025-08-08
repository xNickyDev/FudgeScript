"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveNumericEnum = exports.enumToArray = void 0;
function enumToArray(x) {
    return Object.keys(x).filter((x) => isNaN(Number(x)));
}
exports.enumToArray = enumToArray;
function resolveNumericEnum(x, value) {
    return typeof (value) === "string" ? x[value] : x;
}
exports.resolveNumericEnum = resolveNumericEnum;
//# sourceMappingURL=enum.js.map