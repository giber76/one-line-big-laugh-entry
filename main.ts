import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One funny line for One Line, Big Laugh (max 200 chars, single line).
// Final: horoscope setup + absurd twist — "financial decisions" is the
// horoscope's own phrasing, and the restraint is celebrated by breaking it
// in the most expensive way possible. Deadpan "boat" beats try-hard "yacht".
const LINE =
  "My horoscope said avoid financial decisions today, so I bought a boat to celebrate my restraint.";

// Guard the gate: entry.txt must be 1-200 chars of UTF-8 text, single line.
if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n")) {
  throw new Error(`LINE must be 1-200 chars, single line (got ${LINE.length})`);
}

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE, "utf8");
