"use client";
import { motion } from "framer-motion";
import { FadeIn } from "@/shared/lib/framer";
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
  return (
    <section className={styles.section} id="about">
      <div className={styles.container}>
        <FadeIn>
          <div className={styles.content}>
            <span className={styles.overline}>Кто я такой</span>
            <h2 className={styles.title}>
              Превращаю сложные задачи в элегантный код
            </h2>

            <div className={styles.text}>
              <p>
                Привет! Я <strong>Михаил</strong>, Software Developer с фокусом
                на создании высокопроизводительных веб-приложений. Мой подход
                базируется на архитектурной чистоте и удобстве для конечного
                пользователя.
              </p>
              <p>
                В данный момент специализируюсь на экосистеме{" "}
                <strong>React/Next.js</strong>и методологии{" "}
                <strong>Feature-Sliced Design</strong>, что позволяет мне
                строить масштабируемые проекты, которые легко поддерживать.
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
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </FadeIn>

        <div className={styles.experience}>
          <div className={styles.statCard}>
            <span className={styles.number}>5+</span>
            <span className={styles.label}>Лет опыта</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.number}>20+</span>
            <span className={styles.label}>Проектов</span>
          </div>
        </div>
      </div>
    </section>
  );
};
