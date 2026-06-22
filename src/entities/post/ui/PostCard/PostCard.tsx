import Link from "next/link";
import type { PostMeta } from "../../model/types";
import styles from "./PostCard.module.scss";

const formatDate = (iso: string): string =>
  new Date(iso).toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export const PostCard = ({ post }: { post: PostMeta }) => (
  <Link href={`/blog/${post.slug}`} className={styles.card}>
    <div className={styles.meta}>
      <span className={styles.label}>{post.label}</span>
      <time dateTime={post.date} className={styles.date}>
        {formatDate(post.date)}
      </time>
    </div>
    <h2 className={styles.title}>{post.title}</h2>
    <p className={styles.excerpt}>{post.description}</p>
    <span className={styles.more}>Читать →</span>
  </Link>
);
