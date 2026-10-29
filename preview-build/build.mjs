import { build } from "esbuild";
import { readFileSync, writeFileSync } from "node:fs";

const root = "/home/claude/kali-site";
const res = await build({
  entryPoints: [`${root}/preview-build/entry.tsx`],
  bundle: true, minify: true, write: false, format: "iife", jsx: "automatic",
  target: "es2019",
  alias: {
    "@": root,
    "next/link": `${root}/preview-build/shim-link.tsx`,
    "next/navigation": `${root}/preview-build/shim-nav.tsx`,
  },
  define: { "process.env.NODE_ENV": '"production"', "process.env.NEXT_PUBLIC_FORM_WEBHOOK": "undefined" },
  nodePaths: [`${root}/node_modules`],
  logLevel: "error",
});
import { readdirSync } from "node:fs";
let js = res.outputFiles[0].text;
for (const f of readdirSync(`${root}/public/reviews`)) {
  const uri = "data:image/jpeg;base64," + readFileSync(`${root}/public/reviews/${f}`).toString("base64");
  js = js.split(`/reviews/${f}`).join(uri);
}
js = js.replace(/<\/script/gi, "<\\/script");
let css = readFileSync(`${root}/app/globals.css`, "utf8");
css = css.replace(":root {", ":root {\n  color-scheme: light;");

const html = `<title>Kali Construction</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&display=swap" rel="stylesheet">
<style>
${css}
body { background: var(--cream); color: var(--ink); }
</style>
<div id="root"></div>
<script>${js}</script>
`;
writeFileSync("/home/claude/kali-preview.html", html);
console.log("bytes", html.length);
