import { mkdirSync, writeFileSync } from "node:fs";

// KnobRank — the worst app idea ever pitched, in one sentence.
// It rates every doorknob you touch on grip, squeak and emotional
// availability, then mails you a monthly leaderboard of the doorknobs
// you will never touch again. Specific, deadpan-confident and perfectly
// pointless: nobody needs a ranking of doorknobs, let alone one by post.
// The leaderboard arrives by post, because a doorknob ranking deserves
// paper, not push notifications — and emotional availability is the
// metric no doorknob ever asked to be judged on.
const MAX_ENTRY_CHARS = 240;
const LINE = "KnobRank rates every doorknob you touch on grip, squeak and emotional availability, then mails you a monthly leaderboard of the doorknobs you will never touch again.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
if (LINE.length < 1 || LINE.length > MAX_ENTRY_CHARS) throw new Error("entry must be 1 to 240 characters");
if (LINE.includes("\n") || LINE.includes("\r")) throw new Error("entry must be a single line");
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
