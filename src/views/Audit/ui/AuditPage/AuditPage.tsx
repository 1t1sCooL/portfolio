import type { Metadata } from "next";
import { Reveal } from "@/shared/ui/Reveal";
import styles from "./AuditPage.module.scss";

export const auditMetadata: Metadata = {
  title: "Аудит фронтенда — Михаил Алабугин",
  description:
    "Продуктизированный аудит фронтенда: найду, что тормозит сайт и теряет конверсию. Замеры Lighthouse, приоритизация по impact/effort, отчёт-деливерабл и план фиксов. Фикс-цена, фикс-объём.",
  alternates: { canonical: "https://mmalabugin.ru/audit" },
  openGraph: {
    title: "Аудит фронтенда — Михаил Алабугин",
    description:
      "Ускорю сайт и покажу, что теряет конверсию. Замеры, приоритеты, план фиксов. Фикс-цена и фикс-объём.",
    url: "https://mmalabugin.ru/audit",
    type: "website",
  },
};

const CASE_METRICS = [
  { label: "Performance (mobile)", before: "50", after: "100" },
  { label: "TBT (главный поток)", before: "140 с", after: "0 мс" },
  { label: "Mobile в PSI", before: "падал с ошибкой", after: "100" },
  { label: "CLS (стабильность)", before: "до 0.42", after: "0–0.01" },
];

const PACKAGES = [
  {
    name: "Express",
    price: "от 25 000 ₽",
    term: "3–5 дней",
    summary: "Быстрая диагностика одной ключевой страницы или флоу.",
    features: [
      "1 страница / флоу",
      "Авто-замеры Lighthouse + WebPageTest",
      "Отчёт: топ-10 проблем по приоритету",
      "Чек-лист фиксов",
    ],
    featured: false,
  },
  {
    name: "Standard",
    price: "от 60 000 ₽",
    term: "1–1.5 недели",
    summary: "Глубже: ручной разбор кода и приоритизация по impact/effort.",
    features: [
      "До 5 страниц / флоу",
      "Ручной разбор кода",
      "RUM-данные (если есть)",
      "Приоритизация impact / effort",
      "Loom-видео walkthrough",
    ],
    featured: true,
  },
  {
    name: "Pro / Deep",
    price: "от 120 000 ₽",
    term: "2–3 недели",
    summary: "Полный аудит с конкретными diff-рекомендациями и созвоном.",
    features: [
      "Perf + a11y или perf + архитектура",
      "Оценка бандла",
      "Конкретные diff-рекомендации",
      "Созвон-презентация результатов",
      "1 неделя follow-up",
    ],
    featured: false,
  },
];

const PROCESS = [
  {
    n: "01",
    title: "Замер",
    text: "Lighthouse, WebPageTest, анализ бандла и заголовков — сырые цифры, а не ощущения.",
  },
  {
    n: "02",
    title: "Разбор",
    text: "Нахожу узкие места, оцениваю каждую проблему по влиянию на скорость и конверсию.",
  },
  {
    n: "03",
    title: "Приоритеты",
    text: "Сортирую по impact / effort: что даёт максимум за минимум работы — первым.",
  },
  {
    n: "04",
    title: "Деливерабл",
    text: "Отчёт по шаблону + чек-лист фиксов. Опционально — внедрю сам и подтвержу результат Re-audit'ом.",
  },
];

const TELEGRAM = "https://t.me/ItIsCooL";
const EMAIL = "mailto:mmalabugin@gmail.com";

export const AuditPage = () => {
  return (
    <main className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <Reveal variant="up">
            <p className={styles.kicker}>Услуга</p>
            <h1 className={styles.h1}>Аудит фронтенда</h1>
            <p className={styles.lead}>
              Найду, что тормозит ваш сайт и теряет конверсию — с замерами,
              приоритетами и планом фиксов. Фикс-цена, фикс-объём,
              документ-деливерабл, а не «поработаю сколько надо».
            </p>
            <div className={styles.heroCta}>
              <a className={styles.btnPrimary} href={TELEGRAM} target="_blank" rel="noreferrer">
                Обсудить аудит
              </a>
              <a className={styles.btnGhost} href="#packages">
                Смотреть пакеты
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Кейс */}
      <section className={styles.section}>
        <div className={styles.container}>
          <Reveal variant="up">
            <h2 className={styles.h2}>Свежий кейс: 50 → 100</h2>
            <p className={styles.sub}>
              Портфолио-сайт на Next.js. Замеры — настоящий PageSpeed Insights,
              не оценки.
            </p>
          </Reveal>
          <div className={styles.metrics}>
            {CASE_METRICS.map((m, i) => (
              <Reveal key={m.label} variant="up" delay={i * 0.08} className={styles.metric}>
                <span className={styles.metricLabel}>{m.label}</span>
                <span className={styles.metricRow}>
                  <span className={styles.before}>{m.before}</span>
                  <span className={styles.arrow}>→</span>
                  <span className={styles.after}>{m.after}</span>
                </span>
              </Reveal>
            ))}
          </div>
          <Reveal variant="up" className={styles.caseNote}>
            <p>
              Дополнительно: security-заголовки с нуля, brotli-сжатие −68%,
              avif-картинки, SSR-SEO — без потери анимаций сайта.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Пакеты */}
      <section className={styles.section} id="packages">
        <div className={styles.container}>
          <Reveal variant="up">
            <h2 className={styles.h2}>Пакеты</h2>
            <p className={styles.sub}>
              Жёстко зафиксированный объём. Всё сверх — следующий пакет.
            </p>
          </Reveal>
          <div className={styles.packages}>
            {PACKAGES.map((p, i) => (
              <Reveal
                key={p.name}
                variant="up"
                delay={i * 0.1}
                className={`${styles.pkg} ${p.featured ? styles.pkgFeatured : ""}`}
              >
                {p.featured && <span className={styles.badge}>Популярный</span>}
                <h3 className={styles.pkgName}>{p.name}</h3>
                <div className={styles.pkgPrice}>{p.price}</div>
                <div className={styles.pkgTerm}>{p.term}</div>
                <p className={styles.pkgSummary}>{p.summary}</p>
                <ul className={styles.pkgList}>
                  {p.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <a
                  className={p.featured ? styles.btnPrimary : styles.btnGhost}
                  href={TELEGRAM}
                  target="_blank"
                  rel="noreferrer"
                >
                  Выбрать {p.name}
                </a>
              </Reveal>
            ))}
          </div>
          <Reveal variant="up" className={styles.upsell}>
            <p>
              <strong>Re-audit</strong> — от 15 000 ₽: повторный замер после
              внедрения, подтверждение «было → стало». <strong>Implementation</strong> —
              внедрю фиксы сам (отдельная допродажа).
            </p>
          </Reveal>
        </div>
      </section>

      {/* Как это работает */}
      <section className={styles.section}>
        <div className={styles.container}>
          <Reveal variant="up">
            <h2 className={styles.h2}>Как это работает</h2>
          </Reveal>
          <div className={styles.process}>
            {PROCESS.map((s, i) => (
              <Reveal key={s.n} variant="up" delay={i * 0.08} className={styles.step}>
                <span className={styles.stepNum}>{s.n}</span>
                <h3 className={styles.stepTitle}>{s.title}</h3>
                <p className={styles.stepText}>{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.section}>
        <div className={styles.container}>
          <Reveal variant="up" className={styles.finalCta}>
            <h2 className={styles.h2}>Обсудим ваш сайт?</h2>
            <p className={styles.sub}>
              Напишите — пришлю короткий разбор и подберём пакет под задачу.
            </p>
            <div className={styles.heroCta}>
              <a className={styles.btnPrimary} href={TELEGRAM} target="_blank" rel="noreferrer">
                Написать в Telegram
              </a>
              <a className={styles.btnGhost} href={EMAIL}>
                mmalabugin@gmail.com
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
};
