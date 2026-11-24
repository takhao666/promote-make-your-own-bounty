// Entry for make.fun's "Promote make.fun's make-your-own-bounty post on X" bounty.
// Node 22, standard library only, no network.
//
// The entry is the X post itself: one post of your own on X that quotes make.fun's
// make-your-own-bounty post (https://x.com/makefunai/status/2124915864336236646) or
// links to it, with a photo of its own attached and make.fun (or @makefunai) plus your
// play code in its text. This program just hands the post's address in: it reads
// POST.json from the repository root and copies it to /output/POST.json, where the
// gate reads it. It also validates the address shape and prints a short summary.
//
// POST.json holds the post's address, {"url": "https://x.com/<handle>/status/<id>"}.
// Replace the placeholder with your own post's address before submitting.
//
// Local run:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POST_URL_RE = /^https?:\/\/(x\.com|twitter\.com)\/[A-Za-z0-9_]+\/status\/\d+$/;

const postPath = join(BOT_DIR, 'POST.json');
const raw = readFileSync(postPath, 'utf8');
let post: { url?: unknown };
try {
  post = JSON.parse(raw);
} catch (err) {
  console.error(`POST.json is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}

if (typeof post.url !== 'string' || post.url.length === 0) {
  console.error('POST.json has no "url" string field.');
  process.exit(1);
}

if (!POST_URL_RE.test(post.url)) {
  console.error(
    `POST.json url does not look like a post address yet: ${post.url}\n` +
      'Expected https://x.com/<handle>/status/<id>. Replace the placeholder with your own post before submitting.',
  );
}

mkdirSync(OUTPUT_DIR, { recursive: true });
const outPath = join(OUTPUT_DIR, 'POST.json');
copyFileSync(postPath, outPath);
// Read the copy back and check it is byte for byte the source, so a
// half-written output can never be handed in as the entry.
if (readFileSync(outPath, 'utf8') !== raw) {
  console.error(`Copied POST.json at ${outPath} does not match ${postPath}.`);
  process.exit(1);
}
console.log(`Entry post: ${post.url}`);
console.log(`Copied POST.json to ${outPath} (verified byte for byte)`);
