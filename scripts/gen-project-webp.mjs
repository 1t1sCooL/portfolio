// Генерирует статические WebP-дубли превью проектов под все нужные ширины.
// Цель: НЕ кодировать картинки на лету через /_next/image (AVIF-энкод больших
// PNG зависал на прод-поде). ProjectCard отдаёт эти готовые файлы через
// кастомный loader. Запуск: `node scripts/gen-project-webp.mjs` (или `npm run gen:webp`).
import sharp from "sharp";
import { readdir, mkdir, stat } from "node:fs/promises";
import { join, dirname, basename, extname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SRC_DIR = join(ROOT, "public", "projects");
const OUT_DIR = join(SRC_DIR, "webp");

// Ширины, которые может запросить next/image для этих карточек (совпадают с
// массивом в ProjectCard loader). withoutEnlargement не даёт апскейл сверх
// исходника, так что для мелких PNG крупные варианты = размер исходника.
const WIDTHS = [384, 640, 750, 828, 1080, 1200, 1920];
const QUALITY = 80;

await mkdir(OUT_DIR, { recursive: true });
const files = (await readdir(SRC_DIR)).filter((f) => extname(f).toLowerCase() === ".png");

let made = 0;
let bytesIn = 0;
let bytesOut = 0;
for (const file of files) {
  const name = basename(file, ".png");
  const srcPath = join(SRC_DIR, file);
  bytesIn += (await stat(srcPath)).size;
  for (const w of WIDTHS) {
    const outPath = join(OUT_DIR, `${name}-${w}.webp`);
    const info = await sharp(srcPath)
      .resize(w, null, { withoutEnlargement: true })
      .webp({ quality: QUALITY, effort: 4 })
      .toFile(outPath);
    bytesOut += info.size;
    made++;
  }
}

console.log(
  `[gen-webp] ${files.length} PNG → ${made} WebP (${WIDTHS.length} ширин).\n` +
    `           источники: ${(bytesIn / 1024 / 1024).toFixed(1)} МБ → WebP: ${(bytesOut / 1024 / 1024).toFixed(1)} МБ`,
);
