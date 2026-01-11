"use client";
import { motion } from "framer-motion";
import { STACK_DATA } from "../model/stackData";
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
          <h2 className={styles.title}>Мой Стек</h2>
        </motion.div>

        <div className={styles.grid}>
          {STACK_DATA.map((item, idx) => (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={styles.card}
            >
              <h3 className={styles.categoryTitle}>{item.category}</h3>
              <div className={styles.tags}>
                {item.skills.map((skill) => (
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
