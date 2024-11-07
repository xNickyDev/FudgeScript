export function generateBar(current: number, max: number, len: number = 10, fill: string = "█", empty: string = "▒", round = true, fillStart: string = "", fillEnd: string = "", emptyStart: string = "", emptyEnd: string = "") {
    let fillN = Math[round ? "round" : "trunc"](Math.min(current, max) / max * len)
    let emptyN = len - fillN
    let start = ""
    let end = ""

    if (fillN > 0) {
        start = fillStart || ""
        end = fillEnd || ""
        fillN -= Math.max((fillStart ? 1 : 0) + (fillEnd ? 1 : 0), 0)
    } else if (emptyN > 0) {
        start = emptyStart || ""
        end = emptyEnd || ""
        emptyN -= Math.max((emptyStart ? 1 : 0) + (emptyEnd ? 1 : 0), 0)
    }

    return start + fill.repeat(fillN) + empty.repeat(emptyN) + end
}

export function generateAdvancedBar(
    current: number,
    max: number,
    len: number = 10,
    data: string[],
): string {
    let out = ""
    const portion = max / len

    while (len--) {
        const diff = Math.max(current, 0) / portion
        out += (current -= portion, data.find((x, i) => diff <= (i + 1) / data.length) ?? data.at(-1))
    }

    return out
}