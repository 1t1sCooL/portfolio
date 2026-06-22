import type { Metadata } from "next";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getPostBySlug, type Post } from "@/entities/post";
import styles from "./BlogPostPage.module.scss";

const BASE_URL = "https://mmalabugin.ru";

export const buildPostMetadata = (slug: string): Metadata => {
  const post = getPostBySlug(slug);
  if (!post) return {};

  const url = `${BASE_URL}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      publishedTime: post.date,
    },
  };
};

const formatDate = (iso: string): string =>
  new Date(iso).toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

const articleJsonLd = (post: Post) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: post.title,
  description: post.description,
  datePublished: post.date,
  dateModified: post.date,
  inLanguage: "ru-RU",
  mainEntityOfPage: `${BASE_URL}/blog/${post.slug}`,
  author: {
    "@type": "Person",
    name: "Михаил Алабугин",
    url: BASE_URL,
  },
});

export const BlogPostPage = ({ post }: { post: Post }) => (
  <main className={styles.page}>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd(post)) }}
    />
    <article className={styles.container}>
      <Link href="/blog" className={styles.back}>
        ← Все статьи
      </Link>

      <header className={styles.head}>
        <div className={styles.meta}>
          <span className={styles.label}>{post.label}</span>
          <time dateTime={post.date} className={styles.date}>
            {formatDate(post.date)}
          </time>
        </div>
        <h1 className={styles.h1}>{post.title}</h1>
      </header>

      <div className={styles.body}>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.body}</ReactMarkdown>
      </div>
    </article>
  </main>
);
