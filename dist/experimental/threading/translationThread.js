"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* Translation package is not installed.
parentPort?.on("message", async function(msg: ITranslateData) {
    const translate = await import("@iamtraction/google-translate").then(x => x.default)
    for (;;) {
        const txt = await translate(msg.text, {
            from: "en",
            to: msg.locale
        }).catch(noop)
        if (!txt)
            continue
        parentPort?.postMessage(txt.text)
        break
    }
}) */ 
//# sourceMappingURL=translationThread.js.map