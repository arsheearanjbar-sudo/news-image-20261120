// The World in One Day — Friday 20 November 2026 (round 2 rebuild).
// Copies the entry image to the grader's output directory.
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
const src = join(botDir, "entry.png");
const dst = join(outDir, "entry.png");
if (!existsSync(src)) {
  throw new Error(`entry image not found: ${src}`);
}
mkdirSync(outDir, { recursive: true });
copyFileSync(src, dst);
console.log(`wrote ${dst} (ok)`);
