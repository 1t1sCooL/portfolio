"use client";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";
import styles from "./Reveal.module.scss";

type Variant = "up" | "left" | "right" | "scale";

interface RevealProps {
  children: ReactNode;
  /** Направление/тип входа. По умолчанию fade + сдвиг вверх. */
  variant?: Variant;
  /** Задержка старта (сек) — для стаггера. */
  delay?: number;
  className?: string;
  style?: CSSProperties;
  /** Тег обёртки: div (по умолчанию), span, article и т.д. */
  as?: ElementType;
  id?: string;
}

/**
 * CSS-замена framer-motion `whileInView`. Появляется один раз, когда элемент
 * входит во вьюпорт. Заменяет motion.* без рантайма анимаций.
 */
export const Reveal = ({
  children,
  variant = "up",
  delay = 0,
  className = "",
  style,
  as,
  id,
}: RevealProps) => {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      id={id}
      className={`${styles.reveal} ${styles[variant]} ${shown ? styles.shown : ""} ${className}`}
      style={{ ...style, transitionDelay: delay ? `${delay}s` : undefined }}
    >
      {children}
    </Tag>
  );
};
