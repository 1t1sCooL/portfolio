"use client";
import { useState, useEffect } from "react";
import styles from "./Header.module.scss";
import { Shuffle } from "@/shared/ui/Shuffle/Shuffle";
import { GlitchText } from "@/shared/ui/GlitchText/GlitchText";
import { FuzzyText } from "@/shared/ui/FuzzyText/FuzzyText";

const navLinks = [
  { name: "Обо мне", href: "#about" },
  { name: "Стек", href: "#skills" },
  { name: "Проекты", href: "#projects" },
  { name: "Контакты", href: "#contact" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <nav className={styles.container}>
        <FuzzyText
          fontSize={"2rem"}
          baseIntensity={0.1}
          glitchMode={true}
          glitchInterval={7000}
          glitchDuration={300}
          className={styles.fullName}
          hideAccessibilityText={true}
        >
          Mikhail Alabugin
        </FuzzyText>
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
