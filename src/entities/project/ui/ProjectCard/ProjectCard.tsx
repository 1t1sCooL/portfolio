import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./ProjectCard.module.scss";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  stack: string[];
  link: string;
  github: string;
}

// src/entities/project/ui/ProjectCard/ProjectCard.tsx

export const ProjectCard = ({
  title,
  description,
  image,
  stack,
  link,
  github,
}: ProjectProps) => (
  <motion.article
    className={styles.card}
    // ... animation props
  >
    <div className={styles.imageWrapper}>
      <Image
        src={image}
        alt={title}
        fill
        className={styles.img}
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      {/* Слой overlay должен быть ПОСЛЕ Image, чтобы быть выше по Z-индексу */}
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

      {/* Этот блок всегда будет прижат к низу */}
      <div className={styles.stack}>
        {stack.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
    </div>
  </motion.article>
);
