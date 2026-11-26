import { mkdirSync, writeFileSync } from "node:fs";

const joke = "My password manager forgot my master password, so now it keeps asking me for the one thing I hired it to remember.";
const outPath = "/output/entry.txt";
mkdirSync("/output", { recursive: true });
writeFileSync(outPath, joke);
