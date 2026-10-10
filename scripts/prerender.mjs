// Renders the app's pages to static HTML so GitHub Pages can serve them.
// Inside Lovable the build writes to dist/server + dist/client; elsewhere (e.g. GitHub
// Actions) it writes to .output/server + .output/public. Support both.
import { writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const layouts = [
  { server: "dist/server/index.mjs", client: "dist/client" },
  { server: ".output/server/index.mjs", client: ".output/public" },
];
const layout = layouts.find((l) => existsSync(join(root, l.server)));
if (!layout) throw new Error(`No server build found. Looked for: ${layouts.map((l) => l.server).join(", ")}`);

const routes = ["/"];
const mod = await import(pathToFileURL(join(root, layout.server)).href);
const handler = mod.default;
const outDir = join(root, layout.client);

for (const route of routes) {
  const res = await handler.fetch(new Request(`https://aerorescuenet.com${route}`), {}, { waitUntil() {}, passThroughOnException() {} });
  if (!res.ok) throw new Error(`Prerender of ${route} failed: ${res.status}`);
  const html = await res.text();
  const file = join(outDir, route === "/" ? "index.html" : `${route.replace(/^\//, "")}/index.html`);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
  console.log(`prerendered ${route} -> ${file}`);
}
