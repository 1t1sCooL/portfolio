import { Mail, Send, Github, Share2 } from "lucide-react";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.container}>
        <div className={styles.mainInfo}>
          <h2 className={styles.title}>Контакты</h2>
          <p className={styles.text}>
            Если есть желание посотрудничать или просто сказать
            &quot;Привет!&quot;, то не стесняйтесь — я всегда на связи.
          </p>
        </div>

        <div className={styles.linksGrid}>
          <a href="mailto:mmalabugin@gmail.com" className={styles.linkItem}>
            <Mail size={20} />
            <span>mmalabugin@gmail.com</span>
          </a>
          <a
            href="https://t.me/ItIsCooL"
            target="_blank"
            rel="noreferrer"
            className={styles.linkItem}
          >
            <Send size={20} />
            <span>t.me/ItIsCooL</span>
          </a>
          <a
            href="https://github.com/1t1sCooL"
            target="_blank"
            rel="noreferrer"
            className={styles.linkItem}
          >
            <Github size={20} />
            <span>github.com/1t1sCooL</span>
          </a>
          <a
            href="https://vk.com/itiscoool"
            target="_blank"
            rel="noreferrer"
            className={styles.linkItem}
          >
            <Share2 size={20} />
            <span>vk.com/MishaCooL</span>
          </a>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>© {currentYear} Mikhail Alabugin.</p>
      </div>
    </footer>
  );
};
