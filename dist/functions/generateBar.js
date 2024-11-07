"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAdvancedBar = exports.generateBar = void 0;
function generateBar(current, max, len = 10, fill = "█", empty = "▒", round = true, fillStart = "", fillEnd = "", emptyStart = "", emptyEnd = "") {
    let fillN = Math[round ? "round" : "trunc"](Math.min(current, max) / max * len);
    let emptyN = len - fillN;
    let start = "";
    let end = "";
    if (fillN > 0) {
        start = fillStart || "";
        end = fillEnd || "";
        fillN -= Math.max((fillStart ? 1 : 0) + (fillEnd ? 1 : 0), 0);
    }
    else if (emptyN > 0) {
        start = emptyStart || "";
        end = emptyEnd || "";
        emptyN -= Math.max((emptyStart ? 1 : 0) + (emptyEnd ? 1 : 0), 0);
    }
    return start + fill.repeat(fillN) + empty.repeat(emptyN) + end;
}
exports.generateBar = generateBar;
function generateAdvancedBar(current, max, len = 10, data) {
    let out = "";
    const portion = max / len;
    while (len--) {
        const diff = Math.max(current, 0) / portion;
        out += (current -= portion, data.find((x, i) => diff <= (i + 1) / data.length) ?? data.at(-1));
    }
    return out;
}
exports.generateAdvancedBar = generateAdvancedBar;
//# sourceMappingURL=generateBar.js.map