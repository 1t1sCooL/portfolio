import styles from "./Hero.module.scss";

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.srOnlyHeading}>
        Михаил Алабугин — frontend-разработчик (React, Next.js, TypeScript)
      </h1>
    </section>
  );
};
