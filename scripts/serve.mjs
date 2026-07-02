import http from "node:http";
import { createReadStream, existsSync } from "node:fs";
import { extname, join } from "node:path";

const port = Number(process.env.PORT || 4173);
const root = "dist";
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
};

http
  .createServer((req, res) => {
    const url = req.url === "/" ? "/index.html" : req.url || "/index.html";
    const filePath = join(root, url);
    if (!existsSync(filePath)) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }

    res.writeHead(200, {
      "Content-Type": types[extname(filePath)] || "text/plain; charset=utf-8",
    });
    createReadStream(filePath).pipe(res);
  })
  .listen(port, () => {
    console.log(`Serving ${root}/ at http://localhost:${port}`);
  });
