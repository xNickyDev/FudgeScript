/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

export default function (buffer: Buffer) {
    const [, ...ids] = buffer.toString("utf-8").trim().split(/\r?\n/)
    return ids.filter(Boolean)
}