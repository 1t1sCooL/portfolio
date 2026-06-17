"use client";
import { motion } from "framer-motion";
import { usePerformanceMode } from "@/shared/ui";
import dynamic from "next/dynamic";
import styles from "./About.module.scss";

const DecryptedText = dynamic(() =>
  import("@/shared/ui").then((mod) => mod.DecryptedText),
);

const skills = [
  "TypeScript",
  "Next.js",
  "React",
  "Node.js",
  "FSD Architecture",
  "Sass/SCSS",
];

export const About = () => {
  const performanceMode = usePerformanceMode();

  return (
    <section
      className={
        performanceMode
          ? `${styles.section} ${styles.perfomanceMode}`
          : styles.section
      }
      id="about"
    >
      <div className={styles.container}>
        <div className={styles.revealSlide}>
          <div className={styles.content}>
            {/* Заголовок и абзацы рендерим статично. DecryptedText на крупном
                многострочном тексте при скрамбле менял ширину символов →
                перевёрстка строк → блок менял высоту и толкал контент ниже,
                давая большой осциллирующий CLS. Скрамбл оставлен на коротких
                однострочных элементах ниже (теги, счётчики), где рефлоу нет. */}
            <h2 className={styles.title}>
              Превращаю сложные задачи в элегантный код
            </h2>

            <div className={styles.text}>
              <p>
                Привет! Я Михаил, Software Developer с фокусом на создании
                высокопроизводительных веб-приложений. Мой подход базируется на
                архитектурной чистоте и удобстве для конечного пользователя.
              </p>
              <p>
                В данный момент специализируюсь на экосистеме React/Next.js и
                методологии Feature-Sliced Design, что позволяет мне строить
                масштабируемые проекты, которые легко поддерживать.
              </p>
            </div>

            <div className={styles.skills}>
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className={styles.skillTag}
                >
                  <DecryptedText
                    text={skill}
                    animateOn="view"
                    sequential
                    speed={80}
                    maxIterations={10}
                    performanceMode={performanceMode}
                  />
                </motion.span>
              ))}
            </div>
          </div>
        </div>
        <div className={`${styles.revealSlide} ${styles.delayed}`}>
          <div className={styles.experience}>
            <div className={styles.statCard}>
              <span className={styles.number}>
                <DecryptedText
                  text={"6+"}
                  animateOn="view"
                  speed={80}
                  maxIterations={30}
                  performanceMode={performanceMode}
                />
              </span>
              <span className={styles.label}>Лет опыта</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.number}>
                <DecryptedText
                  text={"30+"}
                  animateOn="view"
                  speed={90}
                  maxIterations={34}
                  performanceMode={performanceMode}
                />
              </span>
              <span className={styles.label}>Проектов</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
