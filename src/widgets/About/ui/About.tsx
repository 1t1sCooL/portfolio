"use client";
import { Reveal, usePerformanceMode, DecryptedText } from "@/shared/ui";
import styles from "./About.module.scss";

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
            <h2 className={styles.title}>
              <DecryptedText
                text="Превращаю сложные задачи в элегантный код"
                animateOn="view"
                speed={10}
                maxIterations={4}
                sequential
                performanceMode={performanceMode}
              />
            </h2>

            {/* Абзацы статичны: длинный многострочный текст под скрамблом
                давал остаточный CLS (перенос строк). Скрамбл оставлен на
                заголовке (короткий, sizer держит размер), тегах и счётчиках. */}
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
                <Reveal
                  key={skill}
                  as="span"
                  variant="scale"
                  delay={index * 0.1}
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
                </Reveal>
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
