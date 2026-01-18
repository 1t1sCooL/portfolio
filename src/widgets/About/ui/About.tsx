"use client";
import { motion } from "framer-motion";
import { FadeIn } from "@/shared/ui";
import dynamic from "next/dynamic";
import { useState } from "react";
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
  const performanceMode = useState(() => {
    const nav = navigator as Navigator & { deviceMemory?: number };
    return navigator.hardwareConcurrency < 4 || (nav.deviceMemory ?? 8) < 4;
  })[0];

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
                performanceMode={performanceMode}
              />
            </h2>

            <div className={styles.text}>
              <p>
                <DecryptedText
                  text="Привет! Я Михаил, Software Developer с фокусом на создании высокопроизводительных веб-приложений. Мой подход базируется на архитектурной чистоте и удобстве для конечного пользователя."
                  animateOn="view"
                  speed={40}
                  performanceMode={performanceMode}
                />
              </p>
              <p>
                <DecryptedText
                  text="В данный момент специализируюсь на экосистеме React/Next.js и методологии Feature-Sliced Design, что позволяет мне строить масштабируемые проекты, которые легко поддерживать."
                  animateOn="view"
                  performanceMode={performanceMode}
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
                    performanceMode={performanceMode}
                  />
                </motion.span>
              ))}
            </div>
          </div>
        </FadeIn>
        <FadeIn>
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
        </FadeIn>
      </div>
    </section>
  );
};
