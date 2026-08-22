// Генерирует public/sw.js из scripts/sw.template.js, подставляя метку
// сборки в имена кешей. Запускается автоматически на prebuild, поэтому
// каждая сборка получает новую версию кеша, а SW при активации удаляет
// кеши прошлых сборок.
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const template = readFileSync(join(root, "scripts", "sw.template.js"), "utf8");

// YYYYMMDDHHMMSS — уникально для каждой сборки и читаемо в DevTools
const version = new Date()
  .toISOString()
  .replace(/[-:TZ.]/g, "")
  .slice(0, 14);

if (!template.includes("__BUILD_VERSION__")) {
  throw new Error("sw.template.js: не найден плейсхолдер __BUILD_VERSION__");
}

writeFileSync(
  join(root, "public", "sw.js"),
  template.replace(/__BUILD_VERSION__/g, version)
);

console.log(`[sw] public/sw.js сгенерирован, версия кеша ${version}`);
