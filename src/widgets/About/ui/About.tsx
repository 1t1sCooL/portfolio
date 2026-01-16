"use client";
import { motion } from "framer-motion";
import { FadeIn } from "@/shared/lib/framer";
import DecryptedText from "@/shared/ui/DecryptedText/DecryptedText";
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
            <h2 className={styles.title}>
              <DecryptedText
                text="Превращаю сложные задачи в элегантный код"
                animateOn="view"
                speed={10}
                maxIterations={4}
                sequential
              />
            </h2>

            <div className={styles.text}>
              <p>
                <DecryptedText
                  text="Привет! Я Михаил, Software Developer с фокусом на создании высокопроизводительных веб-приложений. Мой подход базируется на архитектурной чистоте и удобстве для конечного пользователя."
                  animateOn="view"
                  speed={40}
                />
              </p>
              <p>
                <DecryptedText
                  text="В данный момент специализируюсь на экосистеме React/Next.js и методологии Feature-Sliced Design, что позволяет мне строить масштабируемые проекты, которые легко поддерживать."
                  animateOn="view"
                />
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
                  />
                </motion.span>
              ))}
            </div>
          </div>
        </FadeIn>

        <div className={styles.experience}>
          <div className={styles.statCard}>
            <span className={styles.number}>
              <DecryptedText
                text={"6+"}
                animateOn="view"
                speed={80}
                maxIterations={30}
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
              />
            </span>
            <span className={styles.label}>Проектов</span>
          </div>
        </div>
      </div>
    </section>
  );
};
