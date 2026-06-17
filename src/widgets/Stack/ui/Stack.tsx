"use client";
import { Reveal } from "@/shared/ui";
import { STACK_DATA } from "../model/stackData";
import styles from "./Stack.module.scss";

export const Stack = () => {
  return (
    <section className={styles.section} id="skills">
      <div className={styles.container}>
        <Reveal variant="up" className={styles.head}>
          <h2 className={styles.title}>Мой Стек</h2>
        </Reveal>

        <div className={styles.grid}>
          {STACK_DATA.map((item, idx) => (
            <Reveal
              key={item.category}
              variant={idx % 2 === 0 ? "left" : "right"}
              delay={idx * 0.1}
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
