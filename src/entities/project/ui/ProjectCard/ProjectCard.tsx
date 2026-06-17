import Image from "next/image";
import { Reveal } from "@/shared/ui";
import styles from "./ProjectCard.module.scss";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  stack: string[];
  link: string;
  github: string;
  delay?: number;
}

export const ProjectCard = ({
  title,
  description,
  image,
  stack,
  link,
  github,
  delay = 0,
}: ProjectProps) => (
  <Reveal as="article" variant="up" delay={delay} className={styles.card}>
    <div className={styles.imageWrapper}>
      <Image
        src={image}
        alt={title}
        fill
        className={styles.img}
        // Согласовано с реальной сеткой колонок (ProjectsList): 2 кол. до 1184px,
        // 3 до 1534px, 4 до 1884px, далее 5. Прежние значения завышали ширину и
        // браузер тянул картинку крупнее контейнера.
        sizes={`(max-width: 768px) 46vw,
         (max-width: 1184px) 40vw,
         (max-width: 1534px) 30vw,
         (max-width: 1884px) 22vw,
         18vw`}
      />
      <div className={styles.overlay}>
        <div className={styles.links}>
          <a href={github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={link} target="_blank" rel="noreferrer">
            Demo
          </a>
        </div>
      </div>
    </div>

    <div className={styles.info}>
      <div className={styles.mainContent}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <div className={styles.stack}>
        {stack.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
    </div>
  </Reveal>
);
