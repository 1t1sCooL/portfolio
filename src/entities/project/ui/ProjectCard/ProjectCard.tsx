import Image from "next/image";
import styles from "./ProjectCard.module.scss";

interface Props {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export const ProjectCard = ({ title, description, image, tags }: Props) => (
  <article className={styles.card}>
    <div className={styles.imageWrapper}>
      <Image src={image} alt={title} fill className={styles.img} />
    </div>
    <div className={styles.content}>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={styles.tags}>
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </div>
  </article>
);
