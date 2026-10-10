// Renders the app's pages to static HTML so GitHub Pages can serve them.
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";

const routes = ["/"];
const mod = await import(new URL("../dist/server/index.mjs", import.meta.url).href);
const handler = mod.default;
const outDir = new URL("../dist/client/", import.meta.url).pathname;

for (const route of routes) {
  const res = await handler.fetch(new Request(`https://aerorescuenet.com${route}`), {}, { waitUntil() {}, passThroughOnException() {} });
  if (!res.ok) throw new Error(`Prerender of ${route} failed: ${res.status}`);
  const html = await res.text();
  const file = join(outDir, route === "/" ? "index.html" : `${route.replace(/^\//, "")}/index.html`);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
  console.log(`prerendered ${route} -> ${file}`);
}
