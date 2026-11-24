import * as fs from "node:fs";
import * as path from "node:path";

const LINE: string = "Technically I didn't eat it — I'm still wearing it. On my brush roll.";
const outDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), LINE, "utf8");
