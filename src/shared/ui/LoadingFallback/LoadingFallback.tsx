import styles from "./LoadingFallback.module.scss";

export const LoadingFallback = () => {
  return (
    <div className={styles.fallback}>
      <span className={styles.text}>Загрузка...</span>
    </div>
  );
};
