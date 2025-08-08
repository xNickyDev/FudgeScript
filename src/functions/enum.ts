import { EnumLike } from "../structures"

export function enumToArray(x: EnumLike) {
    return Object.keys(x).filter((x) => isNaN(Number(x)))
}

export function resolveNumericEnum(x: EnumLike, value: string | number) {
    return typeof(value) === "string" ? x[value as keyof typeof x] : value
}