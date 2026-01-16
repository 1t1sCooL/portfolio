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

export const ProjectCard = ({
  title,
  description,
  image,
  stack,
  link,
  github,
}: ProjectProps) => (
  <motion.article className={styles.card}>
    <div className={styles.imageWrapper}>
      <Image
        src={image}
        alt={title}
        fill
        className={styles.img}
        sizes={`(max-width: 640px) 100vw, 
         (max-width: 1024px) 50vw, 
         (max-width: 1440px) 25vw, 
         20vw`}
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
  </motion.article>
);
