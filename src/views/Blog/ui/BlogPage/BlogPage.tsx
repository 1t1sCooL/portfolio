import type { Metadata } from "next";
import { getAllPosts, PostCard } from "@/entities/post";
import styles from "./BlogPage.module.scss";

export const blogMetadata: Metadata = {
  title: "Блог о скорости сайтов и Core Web Vitals | Алабугин",
  description:
    "Разборы, почему сайты тормозят, и как чинить LCP, CLS и INP. Реальные кейсы ускорения сайтов на Next.js и React.",
  alternates: { canonical: "https://mmalabugin.ru/blog" },
  openGraph: {
    title: "Блог: скорость сайтов и Core Web Vitals",
    description:
      "Почему сайты тормозят и как чинить LCP, CLS, INP. Кейсы ускорения сайтов.",
    url: "https://mmalabugin.ru/blog",
    type: "website",
  },
};

export const BlogPage = () => {
  const posts = getAllPosts();

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <header className={styles.head}>
          <p className={styles.kicker}>Блог</p>
          <h1 className={styles.h1}>Скорость сайтов и Core Web Vitals</h1>
          <p className={styles.lead}>
            Разбираю, почему сайты тормозят и теряют конверсию, и как это чинить —
            на реальных метриках и кейсах.
          </p>
        </header>

        <div className={styles.grid}>
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </main>
  );
};
