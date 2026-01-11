"use client";
import { useState, useEffect } from "react";
import styles from "./Header.module.scss";

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
        <div className={styles.logo}>M.A.</div>

        <ul className={styles.nav}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <a href="#contact" className={styles.cta}>
            Обсудить проект
          </a>
        </div>
      </nav>
    </header>
  );
};
