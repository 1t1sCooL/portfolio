export type PostCluster = "case" | "guide";

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  /** ISO date, yyyy-mm-dd */
  date: string;
  cluster: PostCluster;
  /** Короткая подпись кластера для карточки */
  label: string;
}

export interface Post extends PostMeta {
  /** Тело статьи в Markdown */
  body: string;
}
