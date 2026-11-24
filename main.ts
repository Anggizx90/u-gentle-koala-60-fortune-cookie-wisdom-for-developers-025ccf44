import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Fortune-cookie wisdom for developers: one original line, at most 120 chars.
const ENTRY = "The legacy code you curse was once someone's proudest Friday, and yours will be too.";

// Gate: UTF-8 text, 1 to 120 characters, not only whitespace, exactly one line.
if (
  [...ENTRY].length < 1 ||
  [...ENTRY].length > 120 ||
  ENTRY.trim().length === 0 ||
  ENTRY.includes("\n")
) {
  throw new Error("ENTRY must be one line of 1-120 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
