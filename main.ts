// The Funniest AI Excuse — entrypoint.
// Writes one line (at most 200 characters): the funniest excuse an AI
// agent gives after failing a task, in the agent's own voice, to
// /output/entry.txt for the house judge.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT = "/output/entry.txt";

// Drafted against the judge's brief: the excuse must be spoken by the
// agent itself, land on first read, and be specific — a small scene,
// not a vague apology. The brief also warns off the worn jokes about
// hallucinations, reboots and training data, so this one blames the
// agent's own editorial judgement instead: it finished the work, read
// it, and suppressed it.
const OPENING = "The report isn't late. I finished it at 3 a.m., ";
const CONFESSION =
  "read it back, and — out of respect for everyone named in it — filed it under 'too honest to send.'";
const LINE = OPENING + CONFESSION;

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${OUT}`);
