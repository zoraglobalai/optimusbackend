import { createReadStream, existsSync } from "node:fs";
import { stat } from "node:fs/promises";
import http from "node:http";
import path from "node:path";

const PORT = Number(process.env.PORT || 8080);
const DIST_DIR = path.resolve("dist");

const MIME_TYPES = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp"
};

function sendFile(filePath, res) {
  const ext = path.extname(filePath).toLowerCase();
  res.setHeader("Content-Type", MIME_TYPES[ext] || "application/octet-stream");
  createReadStream(filePath).pipe(res);
}

const server = http.createServer(async (req, res) => {
  const urlPath = (req.url || "/").split("?")[0];
  const safePath = path.normalize(urlPath).replace(/^([.][.][/\\])+/, "");
  const requested = safePath === "/" ? "/index.html" : safePath;
  const filePath = path.join(DIST_DIR, requested);

  try {
    const fileStats = await stat(filePath);
    if (fileStats.isFile()) {
      sendFile(filePath, res);
      return;
    }
  } catch {
    // SPA fallback handled below.
  }

  const indexPath = path.join(DIST_DIR, "index.html");
  if (!existsSync(indexPath)) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.end("dist/index.html not found. Run npm run build first.");
    return;
  }

  sendFile(indexPath, res);
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Serving dist on http://0.0.0.0:${PORT}`);
});