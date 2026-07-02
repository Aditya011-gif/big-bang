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
// Remove the existing 'dist' directory to ensure a clean build
// Create a new 'dist' directory
// Copy the main HTML file to the 'dist' directory
// Check if the 'src' directory exists and copy its contents to 'dist/src'
// Write build metadata to a JSON file in the 'dist' directory
// Log a success message to indicate the build is complete
