"use client";
import { motion } from "framer-motion";
import { STACK_CATEGORIES } from "../model/stackData";
import styles from "./Stack.module.scss";

export const Stack = () => {
  return (
    <section className={styles.section} id="skills">
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.head}
        >
          <span className={styles.overline}>Технологии</span>
          <h2 className={styles.title}>Мой актуальный стек</h2>
        </motion.div>

        <div className={styles.grid}>
          {STACK_CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={styles.card}
            >
              <h3 className={styles.categoryTitle}>{category.category}</h3>
              <div className={styles.tags}>
                {category.skills.map((skill) => (
                  <span key={skill} className={styles.tag}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
