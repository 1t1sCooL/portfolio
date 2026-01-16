"use client";
import { useState, useEffect } from "react";
import styles from "./Header.module.scss";
import { FuzzyText } from "@/shared/ui/FuzzyText/FuzzyText";
import Link from "next/link";

const navLinks = [
  { name: "Обо мне", href: "#about" },
  { name: "Стек", href: "#skills" },
  { name: "Проекты", href: "#projects" },
  { name: "Контакты", href: "#contact" },
];

export const Header = () => {
  const [scrollOpacity, setScrollOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const opacity = Math.min(scrollY / 100, 0.8);
      setScrollOpacity(opacity);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Set initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={styles.header}
      style={{
        background: `rgba(var(--bg-rgb), ${scrollOpacity})`,
        backdropFilter: scrollOpacity > 0 ? "blur(12px)" : "none",
        borderBottom:
          scrollOpacity > 0
            ? "1px solid rgba(255, 255, 255, 0.1)"
            : "1px solid transparent",
      }}
    >
      <nav className={styles.container}>
        <Link href="/">
          <FuzzyText
            fontSize={"2rem"}
            baseIntensity={0.1}
            glitchMode={true}
            glitchInterval={7000}
            glitchDuration={300}
            className={styles.fullName}
            hideAccessibilityText={true}
            clickEffect={true}
            wordSpacing={-10}
          >
            Mikhail Alabugin
          </FuzzyText>
        </Link>
        <Link href="/">
          <FuzzyText
            fontSize={"2rem"}
            baseIntensity={0.1}
            glitchMode={true}
            glitchInterval={7000}
            glitchDuration={300}
            className={styles.shortName}
            hideAccessibilityText={true}
          >
            Mikhail
          </FuzzyText>
        </Link>
        <Link href="/">
          <FuzzyText
            fontSize={"2rem"}
            baseIntensity={0.1}
            glitchMode={true}
            glitchInterval={7000}
            glitchDuration={300}
            className={styles.shortName}
            hideAccessibilityText={true}
          >
            Alabugin
          </FuzzyText>
        </Link>

        <ul className={styles.nav}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>
                <FuzzyText
                  fontSize={"1rem"}
                  baseIntensity={0.05}
                  hoverIntensity={0.2}
                  clickEffect={true}
                  hideAccessibilityText={true}
                  wordSpacing={link.name === "Обо мне" ? -10 : 0}
                >
                  {link.name}
                </FuzzyText>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
