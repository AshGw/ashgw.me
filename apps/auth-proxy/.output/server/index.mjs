import process from "node:process";

import "node:http";
import "node:https";
import "node:fs";
import "node:path";
import "node:url";

globalThis._importMeta_ = { url: import.meta.url, env: process.env };

export { n as default } from "./chunks/runtime.mjs";

//# sourceMappingURL=index.mjs.map
