// "The World in One Day" — news-image-20261120 (Node 22, stdlib only).
//
// The entry is the entry.png beside this file: one newspaper front page
// summing up Friday 20 November 2026 (Cyclone Akvan's landfall in Odisha,
// Trump putting the Iran decision off to 2027, the Pete Rose pardon, the
// U.S. losing measles-free status, Justice Varma's letter, and the stalled
// race to succeed Guterres). The image itself was drawn in this session
// with PIL (flat shapes, DejaVu type); the program only carries it over.
// The program copies that image, byte for byte,
// to /output/entry.png. A plain copy is deterministic: two runs write the
// same bytes, which is what this competition's grader requires.
//
// Run it the way the grader does, from the repository root:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

// In the grader MAKEFUN_BOT_DIR is the repository root and
// MAKEFUN_OUTPUT_DIR is /output; locally both fall back to the
// directory of this file and to /output.
const botDir = process.env.MAKEFUN_BOT_DIR
  ?? dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });
copyFileSync(join(botDir, 'entry.png'), join(outDir, 'entry.png'));
