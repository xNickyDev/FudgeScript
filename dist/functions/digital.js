"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unparseDigital = exports.parseDigital = void 0;
function parseDigital(ms) {
    const hours = Math.floor(ms / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);
    const HH = String(hours).padStart(2, "0");
    const MM = String(minutes).padStart(2, "0");
    const SS = String(seconds).padStart(2, "0");
    return `${HH}:${MM}:${SS}`;
}
exports.parseDigital = parseDigital;
function unparseDigital(digital) {
    const [hours, minutes, seconds] = digital.split(":").map(Number);
    try {
        const ms = (hours * 60 * 60 * 1000) + (minutes * 60 * 1000) + (seconds * 1000);
        return ms;
    }
    catch {
        return 0;
    }
}
exports.unparseDigital = unparseDigital;
//# sourceMappingURL=digital.js.map