"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
function default_1(buffer) {
    const [, ...ids] = buffer.toString("utf-8").trim().split(/\r?\n/);
    return ids.filter(Boolean);
}
//# sourceMappingURL=parseTargetUsers.js.map