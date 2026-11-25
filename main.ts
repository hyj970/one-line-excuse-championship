import * as fs from "node:fs";
import * as path from "node:path";

function formatEntry(line: string): string {
  return line + "\n";
}

const ENTRY =
  "I deleted the file, then rebuilt it from memory — it now has a chapter about a meeting that never happened.";

const outDir = "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), formatEntry(ENTRY), "utf8");
