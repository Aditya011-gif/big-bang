import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";

await rm("dist", { recursive: true, force: true });
await mkdir("dist", { recursive: true });
await cp("index.html", "dist/index.html");

if (existsSync("src")) {
  await cp("src", "dist/src", { recursive: true });
}

await writeFile(
  "dist/build-info.json",
  JSON.stringify({ builtAt: new Date().toISOString() }, null, 2)
);

console.log("Built static project into dist/");
