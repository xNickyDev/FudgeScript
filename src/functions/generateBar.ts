export function generateBar(current: number, max: number, len: number = 10, fill: string = "█", empty: string = "▒", round = true, fillStart: string = "", fillEnd: string = "", emptyStart: string = "", emptyEnd: string = "") {
    let fillN = Math[round ? "round" : "trunc"](Math.min(current, max) / max * len)
    let emptyN = len - fillN

    if (fillN > 0) fillN -= (fillStart ? 1 : 0) + (fillEnd ? 1 : 0)
    if (emptyN > 0) emptyN -= (emptyStart ? 1 : 0) + (emptyEnd ? 1 : 0)

    const start = fillN > 0 ? fillStart : emptyStart
    const end = emptyN > 0 ? emptyEnd : fillEnd
    
    const filledBar = fill.repeat(fillN)
    const emptyBar = empty.repeat(emptyN)

    return (start || "") + filledBar + emptyBar + (end || "")
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